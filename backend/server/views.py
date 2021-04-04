from django.shortcuts import render


def not_react(request):
    return render(request, 'server/main.html')