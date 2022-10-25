from django.urls import path
from . import views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    #Teacher
    path('teacher/', views.TeacherList.as_view()),
    path('teacher/<int:pk>/', views.TeacherDetail.as_view()),
    path('teacher-login', views.teacher_login),

    #Categories
    path('category/', views.CategoryList.as_view()),

    #Course
    path('course/', views.CourseList.as_view()),

    #Teacher Courses
    path('teacher-courses/<int:teacher_id>', views.TeacherCourseList.as_view()),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)


