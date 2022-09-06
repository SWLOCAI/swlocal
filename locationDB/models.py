from django.db import models

class Post(models.Model):
    
    user_id = models.CharField(max_length = 10, null = False) # 사용자 이름
    longitude = models.DecimalField(max_digits = 10, decimal_places = 7, null = False) # 경도값
    latitude = models.DecimalField(max_digits = 10, decimal_places = 7, null = False) # 위도값
    group_id = models.CharField(max_length = 20, null = True) # 그룹 코드

    def __str__(self):
        return f'[{self.pk}]{self.user_id}'