import os from 'os';

const interfaces = os.networkInterfaces();
Object.keys(interfaces).forEach(ifname => {
  const iface = interfaces[ifname];
  for (let i = 0; i < iface.length; i++) {
    const { address, family, internal } = iface[i];
    if (family === 'IPv4' && !internal) {
      console.log(`IP address: ${address}`);
    }
  }
});