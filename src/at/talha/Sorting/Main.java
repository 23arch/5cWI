package at.talha.algorithms.Sorting;

public class Main {
    public static void main(String[] args) {
        BubbleSort sorter = new BubbleSort();

        int[] array = DataGenerator.generateDataArray(10, 0, 100);
        DataGenerator.printArray(array);

        System.out.println();

        int[] sortedArray = sorter.sort(array);
        DataGenerator.printArray(sortedArray);
    }
}
