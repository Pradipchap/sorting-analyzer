import { IMenuTriggers, INavLink } from "@/interfaces/componentInterfaces";

export const NavLinks: INavLink[] = [
  { name: "Sorts", url: "sorts" },
  { name: "Cryptos", url: "sorts" },
  { name: "researches", url: "sorts" },
];

export const NavMenuTriggers: IMenuTriggers[] = [
  {
    title: "Sorting algorithms",
    url: "sorts",
    children: [
      {
        title: "Quick Sort",
        url: "quicksort",
        description:
          "A divide-and-conquer algorithm that sorts by partitioning the array.",
      },
      {
        title: "Merge Sort",
        url: "mergesort",
        description:
          "A stable, divide-and-conquer algorithm that splits the array and merges sorted subarrays.",
      },
      {
        title: "Bubble Sort",
        url: "bubblesort",
        description:
          "A simple comparison-based sorting algorithm that repeatedly swaps adjacent elements.",
      },
      {
        title: "Selection Sort",
        url: "selectionsort",
        description:
          "An in-place comparison algorithm that repeatedly selects the smallest element.",
      },
      {
        title: "Insertion Sort",
        url: "insertionsort",
        description:
          "A simple sorting algorithm that builds the sorted array one item at a time.",
      },
      {
        title: "Heap Sort",
        url: "heapsort",
        description:
          "A comparison-based sorting algorithm that uses a binary heap data structure.",
      },
      {
        title: "Radix Sort",
        url: "radixsort",
        description:
          "A non-comparative sorting algorithm that processes individual digits.",
      },
      {
        title: "Shell Sort",
        url: "shellsort",
        description:
          "An optimization of insertion sort that allows the exchange of far apart elements.",
      },
      {
        title: "Counting Sort",
        url: "countingsort",
        description:
          "A non-comparison-based algorithm that counts occurrences of elements for sorting.",
      },
      {
        title: "Bucket Sort",
        url: "bucketsort",
        description:
          "A sorting algorithm that distributes elements into buckets and sorts them individually.",
      },
      {
        title: "Tim Sort",
        url: "timsort",
        description:
          "A hybrid sorting algorithm derived from merge sort and insertion sort, used in Python.",
      },
      {
        title: "Comb Sort",
        url: "combsort",
        description:
          "An improvement over bubble sort that eliminates turtles, or small values near the end of the list.",
      },
      {
        title: "Pigeonhole Sort",
        url: "pigeonholesort",
        description:
          "A non-comparison-based sorting algorithm that is suitable for sorting small integer ranges.",
      },
      {
        title: "Cycle Sort",
        url: "cyclesort",
        description:
          "An in-place sorting algorithm, optimal for situations where memory writes are costly.",
      },
      {
        title: "Cocktail Shaker Sort",
        url: "cocktailshakersort",
        description:
          "A bidirectional variant of bubble sort that passes in both directions.",
      },
    ],
  },
  {
    title: "Crypto algorithms",
    url: "cryptos",
    children: [
      {
        title: "AES (Advanced Encryption Standard)",
        url: "aes",
        description:
          "A symmetric block cipher used for secure data encryption, widely adopted as the encryption standard.",
      },
      {
        title: "RSA (Rivest-Shamir-Adleman)",
        url: "rsa",
        description:
          "An asymmetric encryption algorithm used for secure data transmission and key exchange.",
      },
      {
        title: "SHA-256 (Secure Hash Algorithm 256-bit)",
        url: "sha-256",
        description:
          "A cryptographic hash function that generates a fixed-size hash value from input data.",
      },
      {
        title: "MD5 (Message Digest Algorithm 5)",
        url: "md5",
        description:
          "A hash function that produces a 128-bit hash, though now considered broken for cryptographic purposes.",
      },
      {
        title: "DES (Data Encryption Standard)",
        url: "des",
        description:
          "A symmetric block cipher that was once the standard for data encryption, but now considered insecure.",
      },
      {
        title: "3DES (Triple DES)",
        url: "3des",
        description:
          "A more secure variant of DES, applying the DES algorithm three times for increased security.",
      },
      {
        title: "ECC (Elliptic Curve Cryptography)",
        url: "ecc",
        description:
          "An asymmetric cryptography algorithm that uses elliptic curves for fast and secure encryption.",
      },
      {
        title: "Blowfish",
        url: "blowfish",
        description:
          "A symmetric block cipher designed as an alternative to DES, known for its speed and effectiveness.",
      },
      {
        title: "Twofish",
        url: "twofish",
        description:
          "A symmetric key block cipher and the successor to Blowfish, known for its speed and flexibility.",
      },
      {
        title: "HMAC (Hash-Based Message Authentication Code)",
        url: "hmac",
        description:
          "A cryptographic algorithm used for message integrity and authentication, typically paired with hash functions.",
      },
      {
        title: "Diffie-Hellman Key Exchange",
        url: "diffie-hellman",
        description:
          "A method for securely exchanging cryptographic keys over a public channel.",
      },
      {
        title: "RC4 (Rivest Cipher 4)",
        url: "rc4",
        description:
          "A stream cipher that was widely used for SSL/TLS but is now deprecated due to vulnerabilities.",
      },
      {
        title: "ChaCha20",
        url: "chacha20",
        description:
          "A stream cipher designed as a more secure alternative to RC4, known for its speed and security.",
      },
      {
        title: "PBKDF2 (Password-Based Key Derivation Function 2)",
        url: "pbkdf2",
        description:
          "A key derivation function used to securely store passwords by making brute-force attacks more difficult.",
      },
      {
        title: "Argon2",
        url: "argon2",
        description:
          "A modern key derivation function designed to secure passwords and other sensitive data, optimized for security.",
      },
    ],
  },
];

