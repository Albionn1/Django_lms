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

    #Chapter
    path('chapter/', views.ChapterList.as_view()),

    #Specific Course Chapter
    path('course-chapters/<int:course_id>', views.CourseChapterList.as_view()),

    #Teacher Courses
    path('teacher-courses/<int:teacher_id>', views.TeacherCourseList.as_view()),

    #Shteti
    path('choose-shteti', views.ShtetiList.as_view()),
]


