using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace L2.Task1
{
    public class Mashin
    {
        public string Brand { get; set; }
        public string Model { get; set; }
        public double CurrentFuel { get; set; }
        public double FuelFor1Km { get; set; }
        public int Millage { get; set; }

        public void Drive (int distance)
        {
            double requiredFuel1 = FuelFor1Km * distance;

            if (requiredFuel1 <= CurrentFuel)
            {
                Millage += distance;
                CurrentFuel -= requiredFuel1;
                Console.WriteLine("Surme ugurla heyata kecirilir");
            }
            else 
            {

                Console.WriteLine("Benzin kifayet etmir");
            }
        }




    }
}
