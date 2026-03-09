from tkinter import *
root = Tk()
root.geometry("300x400")
root.title("авторизація")
root["bg"] = "white" # [cite: 51]

lbl_user = Label(text="логін", bg="white", fg="blue")
lbl_user.pack()
ent_user = Entry(width=30, bg="#f0f0f0") # Використання HEX кольору
ent_user.pack()
lbl_pass = Label(text="Пароль:", bg="white", fg="blue")
lbl_pass.pack()
ent_pass = Entry(width=30, bg="#f0f0f0")
ent_pass.pack()
btn_login = Button(text="Увійти", width=20, bg="#eaf0f4", fg="red")
btn_login.pack()
root.mainloop() 