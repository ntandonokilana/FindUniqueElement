function findUniqueElements() {
    const array1Input = document.getElementById("array1").value;
    const array2Input = document.getElementById("array2").value;
    
    const arr1 = array1Input.split(',').map(item => item.trim());
    const arr2 = array2Input.split(',').map(item => item.trim());

    const uniqueElements = difference(arr1, arr2);

    document.getElementById("result").innerHTML = "Unique Elements: " + uniqueElements.join(", ");
}

function difference(arr1, arr2) {
    const combinedArray = arr1.concat(arr2);
    const uniqueSet = new Set(combinedArray);
    const uniqueArray = Array.from(uniqueSet).sort();
    return uniqueArray.map(element => String(element));
}

document.getElementById("findUnique").addEventListener("click", findUniqueElements);