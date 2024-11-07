document.addEventListener('DOMContentLoaded', async function() 
{
    console.log("Entered main.js")
    await getRemainder();
});

async function getRemainder()
{
    const Data = await GetUsage();
    console.log(Data);
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

async function GetUsage()
{
    var response = await fetch('/filament');
    if (response.ok == false)
    {
        console.error("could not get filament data.")
    }

    const Data = await response.json();
    return Data;
}

async function updateUsage()
{
    const Data = await GetUsage();
    const 
    {
        Used
    } = Data;

    const JustUsed = parseFloat(document.getElementById("used").value);
    const UsedTotal = Used + JustUsed;
    console.log(`You have used: ${UsedTotal}. ${Used} + ${JustUsed}`);
    const response = await fetch('/used', 
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Used:  UsedTotal})
    });

    if (!response.ok) 
    {
        console.error("Could not update usage.");
    }
}
