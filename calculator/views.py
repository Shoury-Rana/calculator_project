from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json

def index(request):
    return render(request, 'calculator/index.html')

@csrf_exempt
def calculate(request):
    print(request.POST.get('expression'))
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            expression = data.get('expression')
            print(expression)
            result = eval(expression)
            return JsonResponse({'result': result})
        except Exception as e:
            return JsonResponse({'result': 'Error'})
        
def sci_cal(request):
    return render(request, 'calculator/sci_cal.html')
