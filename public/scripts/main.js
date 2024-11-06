document.addEventListener('DOMContentLoaded', async function() 
{
    console.log("Entered main.js")
    await getRemainder();
});

async function getRemainder()
{
    var response = await fetch('/filament');
    if (response.ok == false)
    {
        console.error("could not get filament data.")
    }

    const Data = await response.json();
    const
    {
        Used,
        Total
    } = Data;

    console.log(Total);
    console.log(Used);
    const Remainder = Total - Used;
    remainderElement = document.getElementById("remainder");
    console.log(Remainder);
    remainderElement.textContent = `${Remainder} grams`;
}
