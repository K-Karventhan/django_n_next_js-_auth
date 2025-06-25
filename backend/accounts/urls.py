from django import views
from django.urls import path
from .views import*

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='login'),
    path('signup/', SignUpView.as_view(), name='signup'),
    path('signup-verify/<int:id>/', SignupVerifyView.as_view(),name = "signup_verify"),
    path('forget-password/', ForgetPasswordView.as_view(),name = "signup_verify"),
    path('reset-password/', ResetPasswordView.as_view(),name = "signup_verify"),
]