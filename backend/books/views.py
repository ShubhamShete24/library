from rest_framework.views import APIView
from rest_framework.response import Response
from books.models import Books
from books.serializers import BooksSerializer
from rest_framework.permissions import IsAuthenticated

from rest_framework.decorators import api_view, permission_classes

# To access all books from table
class AllBooks(APIView):
    def get(self, request):
        books_list = Books.objects.all()
        serialized_data = BooksSerializer(books_list, many=True)
        return Response(data=serialized_data.data)

# To add new book to table
class AddBook(APIView):
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        book_obj = BooksSerializer(data=request.data)
        if book_obj.is_valid():
            book_obj.save()
            return Response(data={"data": book_obj.data})
        return Response(data={'error': book_obj.errors})


# To edit delete book from table
class Book(APIView):
    permission_classes = [IsAuthenticated]

    # To get single book
    def get(self, request, no):
        try:
            book = Books.objects.get(id=no)
            serializer = BooksSerializer(book)
            return Response(data=serializer.data)
        except Books.DoesNotExist:
            return Response(data={'msg': 'Book does not exist'}, status=400)

    # To edit book info
    def put(self, request, no):
        try:
            old_book = Books.objects.get(id=no)
        except Books.DoesNotExist:
            return Response(data={'msg': "Book does not exist"}, status=400)
        new_book = BooksSerializer(old_book, request.data)
        if new_book.is_valid():
            new_book.save()
            return Response(data={'data': new_book.data})
        return Response(data={'error': new_book.errors})

    # To delete book
    def delete(self, request, no):
        try:
            delete_book = Books.objects.get(id=no)
            delete_book.delete()
            return Response(data={'msg': "deleted book"})
        except Books.DoesNotExist:
            return Response(data={'msg': "Book does not exist"}, status=400)
