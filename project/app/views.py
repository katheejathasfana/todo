from rest_framework.views import APIView
from rest_framework import response
from . serialier import UserSerializer
from . models import User

class Create(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            validated_data = serializer.validated_data
            username = validated_data['username']
            password = validated_data['password']
            try:
                exist=User.objects.get(username=username)
                return response.Response({'error': 'User already exists'}, status=400)
            except:
                User.objects.create(username=username, password=password)
            
                
            users=User.objects.all()
            serializer=UserSerializer(users,many=True)       
            return response.Response(serializer.data)
        else:
            return response.Response(serializer.errors)