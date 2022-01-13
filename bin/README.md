# notes on bin

Script used to webscrape images
```
scan_cameras.sh
```

## cron

Using cron to webscrape the camera files periodically.  The `jfdcron`
file is a crontab file.  For format string see `man 5 crontab`

### Load a crontab file

```
$ crontab jfdcron
```

### List existing crontab files
```
$ crontab -l
```

### Remove exisitng crontab files
```
$ crontab -r
```

### Edit crontab files
```
$ crontab -e
```


