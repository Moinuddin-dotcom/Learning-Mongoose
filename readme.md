<!-- Mango server -->

## User Collection
- Name
- Email
- Password
- Role
- Phone

## Mango Collection 
- Name,
- Image
- Variety,
- Price,
- Stock,
- Origin,
- Season


## Order Collection 
- userId,
- mangoId,
- quantity,
- totalPrice,
- status
- address

## ENV
NODE_ENV=development
PORT=5000
DATABASE_URL=mongodb+srv://TodoWithMongoose:kjlhGKtj6umsnOFA@cluster0.afwrd.mongodb.net/mango?retryWrites=true&w=majority&appName=Cluster0