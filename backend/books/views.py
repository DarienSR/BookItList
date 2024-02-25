from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.forms import model_to_dict
from rest_framework import status
from .serializers import BooksSerializer
from .models import Book

@api_view(["GET"])
def home(request):
  routes = [
    {
      'Endpoint': '/api/books/',
      'method': 'GET',
      'body': None,
      'description': 'Returns an array of books'
    },
    {
      'Endpoint': '/api/books/:value/filter/',
      'method': 'GET',
      'body': None,
      'description': 'Returns an array of filtered books'
    },
    {
      'Endpoint': '/api/books/',
      'method': 'POST',
      'body': {
          'description': 'The description of the book'
        },
      'description': 'Creates a new tbr book'
    },
    {
      'Endpoint': '/api/books/:id/',
      'method': 'GET',
      'body': None,
      'description': 'Returns a single book object'
    },
    {
      'Endpoint': '/api/books/:id/',
      'method': 'PUT',
      'body': {
          'description': "The description of the book"
      },
      'description': 'Returns a single book object'
    },
  ]
  return Response(routes)

class BookCLView(ListCreateAPIView):
    queryset = Book.objects.all().order_by("-id")
    serializer_class = BooksSerializer

class BookRUDView(RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all().order_by("-id")
    serializer_class = BooksSerializer

@api_view(["GET"])
def get_filtered_data(request, value):
    data = False
    if value == 1:
      data = True

    queryset = Book.objects.filter(author = data).order_by("-id")

    output = [model_to_dict(book) for book in queryset]

    return Response(output, status=status.HTTP_200_OK)