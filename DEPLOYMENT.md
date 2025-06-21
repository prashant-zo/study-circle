# Deployment Guide

This guide explains how to deploy the StudyCircle application to production while maintaining security and performance.

## 🚀 Frontend Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

4. **Environment Variables**
   Add these to your Vercel project settings:
   ```
   VITE_API_URL=https://your-backend-domain.com/api
   VITE_SOCKET_URL=https://your-backend-domain.com
   ```

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder**

3. **Environment Variables**
   Add these to your Netlify environment variables:
   ```
   VITE_API_URL=https://your-backend-domain.com/api
   VITE_SOCKET_URL=https://your-backend-domain.com
   ```

## 🔧 Backend Deployment

### Railway

1. **Connect your GitHub repository**
2. **Set environment variables:**
   ```
   MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_super_secure_jwt_secret
   NODE_ENV=production
   FRONTEND_URL=https://your-frontend-domain.com
   PORT=5000
   ```

### Render

1. **Create a new Web Service**
2. **Connect your GitHub repository**
3. **Set environment variables:**
   ```
   MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_super_secure_jwt_secret
   NODE_ENV=production
   FRONTEND_URL=https://your-frontend-domain.com
   PORT=10000
   ```

### Heroku

1. **Install Heroku CLI**
2. **Create app**
   ```bash
   heroku create your-app-name
   ```

3. **Set environment variables**
   ```bash
   heroku config:set MONGODB_URI=your_mongodb_atlas_connection_string
   heroku config:set JWT_SECRET=your_super_secure_jwt_secret
   heroku config:set NODE_ENV=production
   heroku config:set FRONTEND_URL=https://your-frontend-domain.com
   ```

4. **Deploy**
   ```bash
   git push heroku main
   ```

## 🗄️ Database Setup

### MongoDB Atlas (Recommended)

1. **Create a MongoDB Atlas account**
2. **Create a new cluster**
3. **Set up database access**
4. **Set up network access (allow all IPs for development)**
5. **Get your connection string**
6. **Replace `<password>` with your database password**

### Local MongoDB

For development only:
```bash
# Install MongoDB locally
# Start MongoDB service
# Use connection string: mongodb://localhost:27017/study-circle
```

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env` files to version control
- Use strong, unique JWT secrets
- Rotate secrets regularly
- Use different secrets for development and production

### CORS Configuration
- Set `FRONTEND_URL` to your actual frontend domain
- Don't use `*` in production
- Configure CORS properly for your deployment

### Database Security
- Use MongoDB Atlas with proper authentication
- Set up IP whitelist for production
- Use strong database passwords
- Enable MongoDB Atlas security features

## 📊 Performance Optimization

### Frontend
- Enable code splitting in Vite config
- Use CDN for static assets
- Optimize images and assets
- Enable gzip compression

### Backend
- Use PM2 for process management
- Enable compression middleware
- Set up proper logging
- Use Redis for session storage (optional)

## 🔍 Monitoring

### Application Monitoring
- Set up error tracking (Sentry)
- Monitor API response times
- Track user interactions
- Set up uptime monitoring

### Database Monitoring
- Monitor MongoDB performance
- Set up alerts for high usage
- Track query performance
- Monitor connection pool

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Check `FRONTEND_URL` environment variable
   - Ensure CORS is properly configured

2. **Database Connection Issues**
   - Verify MongoDB connection string
   - Check network access settings
   - Ensure database is running

3. **Socket.IO Connection Issues**
   - Check `VITE_SOCKET_URL` environment variable
   - Verify Socket.IO server is running
   - Check CORS configuration

4. **Build Issues**
   - Clear node_modules and reinstall
   - Check for missing dependencies
   - Verify environment variables

## 📝 Environment Variables Reference

### Frontend (.env)
```
VITE_API_URL=https://your-backend-domain.com/api
VITE_SOCKET_URL=https://your-backend-domain.com
```

### Backend (.env)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/study-circle
JWT_SECRET=your_super_secure_jwt_secret_key_here
NODE_ENV=production
FRONTEND_URL=https://your-frontend-domain.com
PORT=5000
```

## 🎯 Production Checklist

- [ ] Environment variables configured
- [ ] Database connection established
- [ ] CORS properly configured
- [ ] SSL certificates installed
- [ ] Error monitoring set up
- [ ] Performance monitoring enabled
- [ ] Backup strategy implemented
- [ ] Security headers configured
- [ ] Rate limiting implemented
- [ ] Logging configured

## 📞 Support

For deployment issues:
1. Check the troubleshooting section
2. Review environment variable configuration
3. Verify database connectivity
4. Check server logs for errors
5. Ensure all dependencies are installed 