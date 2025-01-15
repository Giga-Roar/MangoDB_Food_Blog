import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';

function About() {
    return (
        <>
            <Navigation />
            <div className="about-section">
                <h2>About Us</h2>
                <p>Welcome to Mango DB, your go-to source for delicious and easy-to-follow recipes! This is a platform where
                    enthusiastic minds can learn the art of cooking. Whether you're a novice in the kitchen or an
                    experienced home
                    chef, Mango DB is your culinary companion on a flavorful journey.</p>
                <p>At Mango DB, we believe that cooking is more than just a task; it's a creative expression. We are
                    passionate
                    about making cooking accessible and enjoyable for everyone. Our team of chefs, food enthusiasts, and
                    nutritionists curates a diverse range of recipes that cater to various tastes and dietary preferences.
                    From
                    mouthwatering desserts to wholesome meals and exotic cuisines, our recipes are crafted with precision
                    and love.
                </p>
                <p>But Mango DB is more than just recipes; it's a community. Connect with fellow food lovers, share your
                    culinary
                    creations, and explore the latest culinary trends. Whether you're looking for quick weeknight dinner
                    ideas,
                    baking inspiration, or festive feast recipes, Mango DB has you covered.</p>
                <p>Join us in celebrating the art of cooking. Let's embark on a flavorful adventure together, one recipe at
                    a time.
                    Happy cooking!</p>
                <hr />
                <h3>Contact Us</h3>
                <p className="special">If you have any questions, suggestions, or just want to say hello, <a href="./dev_team.html"
                    target="_self">click here</a>.
                </p>

                {/* Extra fill */}
            </div>
        </>
    )
}

export default About;