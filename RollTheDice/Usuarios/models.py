from django.db import models

from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager

# Create your models here.

class MyUserManager(BaseUserManager):
    def create_user(self, email, name, password=None, type=None):
        if not email:
            raise ValueError("Ha de proporcionar un e-mail válido")

        user = self.model(
            email=self.normalize_email(email),
            name=name
        )
        user.name = name
        user.is_active = True
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, password):
        if not email:
            raise ValueError("Ha de proporcionar un e-mail válido")

        user = self.model(email=self.normalize_email(email),
                            name=name)

        user.set_password(password)
        user.is_staff = True
        user.is_active = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class MyUser(AbstractBaseUser):
    name= models.CharField(max_length=30,null=True)
    email=models.EmailField(verbose_name="email address",max_length=255,unique=True)
    create_date=models.DateTimeField(auto_now_add=True)
    update_date=models.DateTimeField(auto_now=True)
    is_staff=models.BooleanField(default=False)
    is_active=models.BooleanField(default=True)

    objects = MyUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ['name']

    def str(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app app_label?"
        return True

    def __str__(self):
        return str(self.id) + " ---- " + str(self.email) + " ---- " + str(self.name) 
    