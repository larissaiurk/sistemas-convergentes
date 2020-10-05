
const fs = require('fs');
const YAML = require('js-yaml');
import { Request, Response, NextFunction } from 'express';


const raw = fs.readFileSync('src/properties/ips.yaml');
const data = YAML.safeLoad(raw);
const ipsData = data.ips;

export function ipMiddleware(req: Request, res: Response, next: NextFunction) {
    var formattedIP = req.ip.split(':').pop();
    
    const ipExists = ipsData.find((ip: string) => formattedIP === ip);
    
    if (ipExists) {
        return res.status(400).json({ error: "Invalid IP access"})
    }

    return next();
}
  