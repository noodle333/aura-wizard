export default function About() {
return(
    <div className="flex flex-col max-w-96 items-center *:text-center">
        <h1 className="mb-4">About</h1>
        <h3>What is Aura Wizard dot com?</h3>
        <p>
            {"Aura Wizard calculates your aura based on your Discord profile, among other things. You can then compare your aura with your friends, and mog them... or get mogged"}
        </p>
        <h3 className="mt-2">How is aura calculated?</h3>
        <p>
            {"Aura Wizard scans your profile and calculates your aura based on your profile picture and your username. Aura Wizard uses ai to determine tags for you profile picture, and then calculates your aura based on those tags. There is a full set of rules on the github page that you're welcome to alter anytime"}
        </p>
        <h3 className="mt-2">How do I get more aura?</h3>
        <p>
            {"I'm working on ways to increase your aura, but for now, you can increase your aura by updating your profile picture, and changing your username"}
        </p>
    </div>
)
}