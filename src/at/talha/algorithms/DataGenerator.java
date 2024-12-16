package at.talha.algorithms;

import java.util.Random;

public class DataGenerator {

    public static int[] generateDataArray(int size) {
        Random rand = new Random();
        int[] data = new int[size + 1];
        for (int i = 0; i < size; i++) {
            data[i] = rand.nextInt();
        }
        return data;
    }

    public static int[] generateDataArray(int size, int min, int max) {
        Random rand = new Random();
        int[] data = new int[size];
        for (int i = 0; i < size; i++) {
            data[i] = rand.nextInt(min, max);
        }
        return data;
    }

    public static void printArray(int[] data) {
        for (int i = 0; i < data.length; i++) {
            System.out.print(data[i] + "  ");
        }
    }
}
