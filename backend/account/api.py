from django.http import JsonResponse
from rest_framework.decorators import (
    api_view,
    permission_classes,
    authentication_classes
)


from .forms import SignInForm


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
    
    if request.method == 'POST':

        form = SignInForm(request.data)

        message = 'Sign in successfully.'

        if form.is_valid():
            form.save()
            return JsonResponse({'message': message}, status=200)
        else:
            errors = dict(form.errors.items())  # Convert errors to a dictionary
            return JsonResponse({'errors': errors}, status=400)
