# telegram-contact-form

Telegram Contact Form is a simple and easy way to send a contact form data to a telegram group.

---

## Get Started

Install all dependencies:

`yarn install`

Add the environment variables:

```
NODE_ENV=
TOKEN=
CHAT_ID=
PRODUCTION_URL=
```

Run the bot:

`yarn start`

## How to use

POST /api/form

```
{
	"name": "John Doe",
	"contact": "johndoe@contact.com",
	"message": "Hello World"
}
```

