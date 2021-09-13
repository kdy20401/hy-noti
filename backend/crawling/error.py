import sys, smtplib
from email.mime.text import MIMEText


def send_email(msg):
    identifier = sys.argv[1]
    password = sys.argv[2]
    emailAddress = '{}@naver.com'.format(identifier)
    
    server = smtplib.SMTP_SSL('smtp.naver.com', 465)
    server.login(emailAddress, password)
    
    email = MIMEText("PANIC: unexpected error at '{}'".format(msg))
    email['Subject'] = 'HYnoti'
    email['From'] = emailAddress
    email['To'] = emailAddress
    server.sendmail(emailAddress, emailAddress, email.as_string())
    
    server.quit()

def panic(board, func, driver=None):    
    print('panic: unexpected error at {} in {}'.format(func, board))
    if driver is not None:
        driver.quit()
    send_email(func)
    sys.exit(0)