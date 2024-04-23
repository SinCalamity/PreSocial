import datetime
from storages.backends.s3boto3 import S3Boto3Storage # type: ignore

AWS_ACCESS_KEY_ID = "<AKIA2UC3ABOO2YDQY746>"
AWS_SECRET_ACCESS_KEY = "<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>"
AWS_FILE_EXPIRE = 200
AWS_PRELOAD_METADATA = True
AWS_QUERYSTRING_AUTH = True

DEFAULT_FILE_STORAGE = '<PreSocial>.aws.utils.MediaRootS3BotoStorage'
STATICFILES_STORAGE = '<PreSocial>.aws.utils.StaticRootS3BotoStorage'
AWS_STORAGE_presocialpolicy = 'example-bucket'
S3DIRECT_REGION = 'ap-southeast-1'
S3_URL = '//%s.s3.amazonaws.com/' % 'example-bucket'
MEDIA_URL = '//%s.s3.amazonaws.com/media/' % AWS_STORAGE_presocialpolicy
MEDIA_ROOT = MEDIA_URL
STATIC_URL = S3_URL + 'static/'
ADMIN_MEDIA_PREFIX = STATIC_URL + 'admin/'

two_months = datetime.timedelta(days=61)
date_two_months_later = datetime.date.today() + two_months
expires = date_two_months_later.strftime("%A, %d %B %Y 20:00:00 GMT")

AWS_HEADERS = {
    'Expires': expires,
    'Cache-Control': 'max-age=%d' % (int(two_months.total_seconds()), ),
}

AUTH_PASSWORD_VALIDATORS = True