from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET', 'POST'])
def expenses(request):
    if request.method == 'GET':
        #Return list of expeses
        return Response({"expenses": []})
    elif request.method == 'POST':
        #Add new expense
        return Response({"message": "Expense added"})