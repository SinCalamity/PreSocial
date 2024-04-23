
from storages.backends.s3boto3 import S3Boto3Storage # type: ignore

class StaticRootS3Boto3Storage(S3Boto3Storage):
    location = 'static'
    default_acl = 'public-read'

class MediaRootS3Boto3Storage(S3Boto3Storage):
    location = 'media'
    default_acl = 'private'

DEFAULT_FILE_STORAGE = '<your_app>.<path_to_storage>.MediaRootS3Boto3Storage'
STATICFILES_STORAGE = '<your_app>.<path_to_storage>.StaticRootS3Boto3Storage'
