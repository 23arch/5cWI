package at.talha.algorithms;

public class Main {
    public static void main(String[] args) {
        int[] data = DataGenerator.generateDataArray(4, 0, 100);
        int[] reversed = BaseAlgorithms.revert(data);
        DataGenerator.printArray(data);
        System.out.println();
        DataGenerator.printArray(reversed);
        System.out.println();
        System.out.println(BaseAlgorithms.max(data));
        System.out.println(BaseAlgorithms.min(data));
    }
}
