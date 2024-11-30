from django.shortcuts import render

# Create your views here.
def landing_page(request):
    return render(request, 'landing/landing_page.html')

def chat_page(request):
    return render(request, 'landing/chat_page.html')
