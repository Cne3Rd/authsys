from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login, logout, authenticate
from .forms import SignupForm
from django.contrib import messages


def signup(request):
    if request.user.is_authenticated:
        return HttpResponse(f"Welcome Back -> {request.user}")
    if request.method == "POST":
        form = SignupForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("/account/login/")
    else:
        form = SignupForm()
    return render(request, "users/register.html", {"form":form})

def signin(request):
    if request.user.is_authenticated:
        return render(request, "users/ai.html")
    if request.method == "POST":
        form = AuthenticationForm(request.POST)
        if form.is_valid:
            username = request.POST["username"]
            password = request.POST["password"]
            user =  authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return render(request, "users/si.html")
            else:
                messages.error(request, "Invalid username and password")
                return render(request, "users/login.html", {"form":form})
        else:
            return render(request, "users/login.html", {"form":form})
    else:
        form = AuthenticationForm()
    return render(request, "users/login.html", {"form":form})

def byebye(request):
    logout(request)
    return render(request, "users/logout.html")
