using System.Security.Cryptography;
using System;

namespace L2.Task1
{
    class Program
    {
        static void Main(string[] args)
        {
            Mashin mashin1 = new Mashin();

            mashin1.Brand = "BMW";
            mashin1.Model = "M5";
            mashin1.CurrentFuel = 70.0;
            mashin1.FuelFor1Km = 0.3;
            mashin1.Millage = 17588;

            mashin1.Drive(220);
            Console.WriteLine("Yol: {0} km", mashin1.Millage);
            Console.WriteLine("Benzin: {0} litr", mashin1.CurrentFuel);
        }
    }
}