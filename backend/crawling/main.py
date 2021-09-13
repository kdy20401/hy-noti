from apscheduler.schedulers.background import BlockingScheduler
from apscheduler.triggers.cron import CronTrigger
from cse import crawl_cse_notice
from portal import crawl_portal_notice
from db import truncate_db_all


def crawl_hanyang_notice():
    try:
        # crawl_cse_notice()
        crawl_portal_notice()
    except SystemExit:
        pass
    print('crawl_hanyang_notice fin')

scheduler = BlockingScheduler()

# t1 = CronTrigger(day_of_week='sat-sun', hour='11-16', minute='*/30', timezone='Asia/Seoul')
# t2 = CronTrigger(day_of_week='fri', minute='*/10', timezone='Asia/Seoul')
t1 = CronTrigger(day_of_week='mon-fri', hour='7-17', minute='*/30', timezone='Asia/Seoul')
t2 = CronTrigger(day_of_week='mon-fri', hour='18', timezone='Asia/Seoul')

scheduler.add_job(crawl_hanyang_notice, trigger=t1)
scheduler.add_job(truncate_db_all, trigger=t2)

print('crawler running,,,,')
scheduler.start()
