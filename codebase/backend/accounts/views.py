from django.shortcuts import redirect
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from accounts.serializer import *
from rest_framework.authtoken.models import Token
from django.template.loader import render_to_string
from rest_framework import status
from django.contrib.auth import get_user_model
from library.response.response_messages import ApiResponseMessages
from library.response.api_response import CustomResponse
from library.utility.utility import Email
from rest_framework.generics import GenericAPIView

from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from django.utils.http import urlsafe_base64_decode


api_msg_obj = ApiResponseMessages()
User = get_user_model()

@permission_classes((AllowAny, ))
class LoginView(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserLoginSerializer
    def post(self, request):
   
        data = request.data
        login_serializer = UserLoginSerializer(data=data)

        if not login_serializer.is_valid():
            msg = api_msg_obj.field_missing[0]
            status_code = status.HTTP_401_UNAUTHORIZED
            resp_json = CustomResponse.default_response(msg, status_code)
            return Response(resp_json, status=status_code)

        email = data.get('email')
        password = data.get('password')

        try:
            request_user = login_serializer.authenticate(email=email, password=password)

            if request_user:
                # Optional: remove existing token to prevent duplication
                Token.objects.filter(user=request_user).delete()

                # Create new token
                token = Token.objects.create(user=request_user)

                msg = {
                    "token": token.key,
                    "user": str(request_user),
                    "user_id": request_user.id,
                    "status": status.HTTP_201_CREATED
                }
                return Response(msg, status=status.HTTP_201_CREATED)

            else:
                msg = api_msg_obj.invalid_credentials
                status_code = status.HTTP_400_BAD_REQUEST

        except Exception as e:
            msg = api_msg_obj.send_email_failure
            status_code = status.HTTP_500_INTERNAL_SERVER_ERROR

        resp_json = CustomResponse.default_response(msg, status_code)
        return Response(resp_json, status=status_code)


    # def post(self, request):
    #     """
    #     This API is used to generate a auth token for login purpose.

    #     @param request: email and password
    #     @return: retruns a auth token object along with user data.
    #     """
    #     data = request.data
    #     login_serializer = UserLoginSerializer(data=data)   

    #     if login_serializer.is_valid():
    #         email=data['email']
    #         password=data['password']
    #         valid_email = User.objects.filter(email__iexact=data['email'], status='Active')

    #         if valid_email:
    #             try:
    #                 user = User.objects.get(email=data['email'])
    #                 # email_template = render_to_string('signup.html',{"id":user.id,"username":user.username,"APP_URL":settings.APP_URL})
    #                 # Email.send_email(email_template,"User Signup",user.email)    
    #                 msg = api_msg_obj.not_activate
    #                 status_code = status.HTTP_201_CREATED
    #             except Exception as er:
    #                 msg = api_msg_obj.send_email_failure
    #                 status_code = status.HTTP_408_REQUEST_TIMEOUT
    #             # check_to_active_email = User.objects.filter(email__iexact=data['email'],is_active = True)

    #             # if check_to_active_email:
    #             #     request_user = login_serializer.authenticate(email=email,password=password)

    #             #     if request_user:
    #             #         try:
    #             #             Token.objects.get(user=request_user).delete()
    #             #         except Exception as er:
    #             #                 pass
    #             #         Token.objects.create(user=request_user)
    #             #         new_token = list(Token.objects.filter(user_id=request_user).values("key"))       
    #             #         msg={
    #             #             "token":str(new_token[0]['key']),
    #             #             'user':str(request_user),
    #             #             'user_id':request_user.id,
    #             #             'status':status.HTTP_201_CREATED
    #             #         }
    #             #         return Response(msg, status=status.HTTP_201_CREATED) 

    #             #     else:
    #             #         msg = api_msg_obj.invalid_credentials
    #             #         status_code = status.HTTP_400_BAD_REQUEST
    #             # else:
    #             #     try:
    #             #         user = User.objects.get(email=data['email'])
    #             #         email_template = render_to_string('signup.html',
    #             #                                             {"id":user.id,"username":user.username,"APP_URL":settings.APP_URL})
    #             #         Email.send_email(email_template,"User Signup",user.email)    
    #             #         msg = api_msg_obj.not_activate
    #             #         status_code = status.HTTP_201_CREATED
    #             #     except Exception as er:
    #             #         msg = api_msg_obj.send_email_failure
    #             #         status_code = status.HTTP_408_REQUEST_TIMEOUT
    #         else:
    #             msg = api_msg_obj.user_email_not_active
    #             status_code = status.HTTP_400_BAD_REQUEST
                
    #     else:
    #         msg = api_msg_obj.field_missing[0]
    #         status_code = status.HTTP_401_UNAUTHORIZED
       
    #     resp_json = CustomResponse.default_response(msg, status_code)
    #     return Response(resp_json, status=status_code)                    


@permission_classes((AllowAny, ))
@method_decorator(csrf_exempt, name='dispatch')
class SignUpView(GenericAPIView):
    serializer_class = UserLoginSerializer

    def post(self, request):
        """
        This api create a new user account

        :param request: username, email and password
        :return: returns user creation json reponse
        """
        data = {"username":request.data['email'],'email':request.data['email'],'password':request.data['password']}
        valid_email = User.objects.filter(email__iexact=data['email'])
        if valid_email:
            msg =api_msg_obj.email_already_exists
            status_code = status.HTTP_400_BAD_REQUEST
        else:
            try:    
                serializer = UserSerializer(data=data)
                valid = serializer.is_valid(raise_exception=True)
                if valid:                
                    user = serializer.save()
                    email_template = render_to_string('signup.html',
                                                        {"id":user.id,"username":user.username,"APP_URL":settings.APP_URL})
                    msg = "Account created successfully. Please log in."
                    status_code = status.HTTP_201_CREATED
                    
                    # try:
                    #     Email.send_email(email_template,"User Signup",user.email)    
                    #     msg = api_msg_obj.signin_success
                    #     status_code = status.HTTP_201_CREATED
                    # except:
                    #     msg = api_msg_obj.send_email_failure
                    #     status_code = status.HTTP_408_REQUEST_TIMEOUT   
                else:                    
                    msg = api_msg_obj.field_missing
                    status_code = status.HTTP_400_BAD_REQUEST

            except KeyError:
                msg = api_msg_obj.field_missing[0]
                status_code = status.HTTP_400_BAD_REQUEST
        
        resp_json = CustomResponse.default_response(msg, status_code)
        return Response(resp_json, status=status_code)                    


# This api logout the user account and delete the auth token object.
@permission_classes((AllowAny, ))
@permission_classes((IsAuthenticated))
class LogoutView(GenericAPIView):
    """
        This api handles the Logout Request by deleting token from Auth User Token table.

        :param request: token
        :return: returns logout reponse
    """
    serializer_class = UserLogout
    def post(self, request):
        
        try:    
            Token.objects.get(key=request.data['key']).delete()
            msg = api_msg_obj.success
            status_code = status.HTTP_200_OK
        except Exception as er:
            msg = api_msg_obj.not_found
            status_code=status.HTTP_401_UNAUTHORIZED

        resp_json = CustomResponse.default_response(msg, status_code)
        return Response(resp_json, status=status.HTTP_200_OK) 



@permission_classes([AllowAny,])
class SignupVerifyView(APIView):
    def get(self, request, id):
        """
            This api verifies the newly created user account.

            :param request: ser account id
            :return: returns user account verification status message
        """      
        try:
            user = User.objects.get(id = id)
            if user.is_active == False:
                user.is_active=True
                user.save()
                msg = api_msg_obj.activate_account
                status_code = status.HTTP_202_ACCEPTED                

            else:
                msg = api_msg_obj.already_activate
                status_code=status.HTTP_208_ALREADY_REPORTED

        except:
            msg = api_msg_obj.not_found
            status_code=status.HTTP_401_UNAUTHORIZED

        resp_json = CustomResponse.default_response(msg, status_code)
        return redirect(settings.CROS_APP_URL) 


# This api forgets the password of the user account by using a user id and password and it will send to an email link.

@permission_classes([AllowAny,])
class ForgetPasswordView(GenericAPIView):
    serializer_class = UserForgetPassword
    def post(self,request):
        """
            This api sends a link to reset user password.

            :param request: email id.
            :return: returns email sent status response.
        """
        data = request.data   
        email = request.data['email']
        if email:
            user_email = User.objects.filter(email__iexact=email)
            if user_email.exists() and user_email[0].auth_provider != 'email':
                raise AuthenticationFailed(
                    detail = 'Please continue your login using ' + user_email[0].auth_provider)
                    
            if user_email:
                user = User.objects.get(email__iexact=email)
                user_token = Token.objects.get_or_create(user=user)
                uuid= urlsafe_base64_encode(force_bytes(user.id))
                email_template = render_to_string('forgetpassword.html',{"username":user.username,"id":uuid,"key":user_token[0],"CROS_URL":settings.CROS_URL})                

                try:
                    Email.send_email(email_template,"Forget password",user.email)    
                    msg = api_msg_obj.forgetpassword
                    status_code = status.HTTP_202_ACCEPTED
                except:
                    msg = api_msg_obj.send_email_failure
                    status_code = status.HTTP_408_REQUEST_TIMEOUT 

            else:
                msg = api_msg_obj.invalid_email
                status_code=status.HTTP_401_UNAUTHORIZED

        else:
            msg = api_msg_obj.field_missing[0]
            status_code=status.HTTP_401_UNAUTHORIZED
        
        resp_json = CustomResponse.default_response(msg, status_code)
        return Response(resp_json, status=status_code) 


# This api user account  updated the password by using the user id and confirm password.

@permission_classes([AllowAny,])
class ResetPasswordView(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserResetPasswordSerializer

    def post(self,request):
        """
            This api resets the password of requested user.

            :param request: user id and password
            :return: returns password reset status message
        """
        data = request.data
        try:
            user_token = Token.objects.get(key=data['key'])  
            try:             
                user_id = urlsafe_base64_decode(data['id']).decode()
                user = User.objects.get(id=user_id)
                user.set_password(data['password'])
                user.save()
                user_token.delete()
                msg = api_msg_obj.password_reset
                status_code=status.HTTP_201_CREATED
            except:               
                msg = api_msg_obj.account_not_fount
                status_code=status.HTTP_406_NOT_ACCEPTABLE     
        except:
            msg = api_msg_obj.password_reset_session_exp
            status_code=status.HTTP_408_REQUEST_TIMEOUT   
        
        resp_json = CustomResponse.default_response(msg, status_code)

        return Response(resp_json, status=status_code)

