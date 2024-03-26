from django.contrib.auth.forms import UserCreationForm

from .models import User 


class SignInForm(UserCreationForm):
    
    class Meta:
        model = User 
        fields = (
            'name',
            'email',
            'password1',
            'password2',
            'phone',
            'company',
            'address',
            'zipcode',
            'city',
            'country'
        )