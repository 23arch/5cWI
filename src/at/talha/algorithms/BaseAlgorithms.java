package at.talha.algorithms;

public class BaseAlgorithms {

    public static int[] revert(int[] data) {
        int[] reversed = new int[data.length];
        for (int i = 0; i < data.length; i++) {
            reversed[i] = data[data.length - i - 1];
        }
        return reversed;
    }

    public static int max(int[] data) {
        int maxVal = 0;
        for (int i = 0; i < data.length; i++) {
            if (data[i] > maxVal) {
                maxVal = data[i];
            }
        }
        return maxVal;
    }

    public static int min(int[] data) {
        int minVal = 100;
        for (int i = 0; i < data.length; i++) {
            if (data[i] < minVal) {
                minVal = data[i];
            }
        }
        return minVal;
    }
}
