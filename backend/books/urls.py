from django.urls import path
from .views import AllBooks, Book, AddBook

# URLS to perform CURD operation for Book Model
urlpatterns = [
    path('allBook', AllBooks.as_view()),
    path('create/', AddBook.as_view()),
    path('update_delete/<int:no>', Book.as_view())
]
