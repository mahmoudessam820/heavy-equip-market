from django.http import JsonResponse
from rest_framework import status 
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import (
    api_view,
    permission_classes,
    authentication_classes
)
from account.models import User
from account.forms import SignInForm


@api_view(['GET'])
def me(request):
    return JsonResponse({
        'id': request.user.id,
        'name': request.user.name,
        'email': request.user.email
    })


@api_view(['POST'])
@authentication_classes([])
@permission_classes([])
def signin(request):
    try:
        if request.method == 'POST':
            form = SignInForm(request.data)
            if form.is_valid():
                form.save()
                return JsonResponse({'message': 'Sign in successfully.'}, status=status.HTTP_201_CREATED)
            else:
                errors = form.errors.get_json_data()
                return JsonResponse({'errors': errors}, status=status.HTTP_400_BAD_REQUEST)
    except User.DoesNotExist:
        return JsonResponse({'message': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
def logout(request):
    refresh_token = request.headers.get('refresh_token')
    token = RefreshToken(refresh_token)
    token.blacklist()
    return JsonResponse({'message': 'Logged out successfully.'}, status=status.HTTP_204_NO_CONTENT)
