package at.talha.Sorting;

import java.util.Random;

public class DataGenerator {

    public static int[] generateDataArray(int size, int min, int max) {
        Random r = new Random();
        int[] data = new int[size];
        for (int i = 0; i < size; i++) {
            data[i] = r.nextInt(max - min) + min;
        }
        return data;
    }

    public static void printArray(int[] data) {
        for (int i = 0; i < data.length; i++) {
            System.out.print(data[i] + " ");
        }
    }
}
