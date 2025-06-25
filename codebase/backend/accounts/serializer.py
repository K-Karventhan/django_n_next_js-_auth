from rest_framework import serializers
from rest_framework.response import Response

from rest_framework.authtoken.models import Token
# from sso_auth.models import User
from accounts.models import User
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.conf import settings

from rest_framework.exceptions import AuthenticationFailed      

from django.conf import settings
from rest_framework import serializers

from library.register.register import register_social_user
from rest_framework.exceptions import AuthenticationFailed


class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True, allow_null=False,)
    password = serializers.CharField(required=True, allow_null=False)

    def authenticate(self, username=None, password=None, email=None, **kwargs):
        filtered_user_by_email = User.objects.filter(email=email)
        if filtered_user_by_email.exists() and filtered_user_by_email[0].auth_provider != 'email':
            raise AuthenticationFailed(
                detail='Please continue your login using ' + filtered_user_by_email[0].auth_provider)

        UserModel = get_user_model()
        try:
            user = User.objects.get(email__iexact=email)

        except UserModel.DoesNotExist:
            return None
        else:
            if user.check_password(password):
                return user
        return None


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(write_only=True)
    password = serializers.CharField(write_only=True, allow_null=False)

    class Meta:
        model = User
        fields = ('email', 'password', 'username')

    def create(self, validated_data):
        email = validated_data['email']
        try:
            user = super(UserSerializer, self).create(validated_data)
        except:
            raise email + " already exists"

        user.set_password(validated_data['password'])
        user.save()
        return user


class UserResetPasswordSerializer(serializers.Serializer):
    id = serializers.CharField()
    password = serializers.CharField()
    key = serializers.CharField()


class UserForgetPassword(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email',)


class UserLogout(serializers.ModelSerializer):
    class Meta:
        model = Token
        fields = ('key',)
        
