
export default function indicator (item) {
   const {health} = item;

   if (health > 50) {
       return 'healthy';
   }
   else if (health < 15) {
       return 'critical';
   }
   else {
       return 'wounded';
   }
}

