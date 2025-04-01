from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'core/about.html')



def contact(request):
    return render(request, 'core/contact.html')

 
def error_page(request):
    return render(request, 'error-page.html')

