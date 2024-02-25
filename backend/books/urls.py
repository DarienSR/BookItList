from django.urls import path
from .views import home, BookCLView, BookRUDView, get_filtered_data

urlpatterns = [
  path('api/books/', BookCLView.as_view(), name='book-tbr-create'),
  path('api/books/<int:pk>/', BookRUDView.as_view(), name='book-rud'),
  path('api/books/<int:value>/filter/', get_filtered_data, name='filter-books'),
  path('', home, name='api-home')
]
