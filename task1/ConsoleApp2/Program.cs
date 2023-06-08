class Program
{
    static void Main(string[] args)
    {
        int num1 = 2;
        int num2 = 17;   
        int num3 = 13;

        int max = FindMax(num1, num2, num3);
        Console.WriteLine(max);
    }

    static int FindMax(int a, int b, int c)
    {
        int max = a;

        if (b > max)
            max = b;

        if (c > max)
            max = c;

        return max;
    }
}