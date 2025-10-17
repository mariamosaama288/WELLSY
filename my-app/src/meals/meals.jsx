import style from "./meals.module.css";
import Chatbot from '../chat/chatbot.jsx'
import {useState} from "react";
import { Link } from "react-router-dom";
 function Meals() {
    
  const[x,y]=useState(null);
  if (x==="breakfast1"){return(
    <div >
      <button className={style.b} onClick={()=>y(null)}>Back</button>
      <div className={style.all}>
      <img src="https://www.inspiredtaste.net/wp-content/uploads/2016/07/Whole-Wheat-Pancakes-Recipe-1-1200.jpg" alt="meal1"/>
      <div className={style.t} >
      <h1>Whole grain pancakes</h1>
      <h2>Ingredients:</h2>
      <p>1 cup whole wheat flour.<br/>
      1 tbsp baking powder.<br/>
      1 tbsp brown sugar or honey.<br/>
      1/2 tsp cinnamon powder.<br/>
      pinch of salt.<br/>
      1 egg.<br/>
      1 cup milk (regular or plant-based).<br/>
      2 tbsp olive oil or melted butter.<br/>
      1 tsp vanilla extract.<br/>
      </p>
      <h2>Recipe:</h2>
      <p>1:In a large bowl, mix the dry ingredients: flour, baking powder, sugar, cinnamon, and salt.<br/>
      2:In another bowl, whisk the egg with milk, oil, and vanilla.<br/>
      3:Combine the wet and dry ingredients and stir until smooth (don’t overmix).<br/>
      4:Heat a non-stick pan with a little oil.<br/>
      5:Pour half a ladle of batter for each pancake and cook for 2–3 minutes until bubbles form.<br/>
      6:Flip and cook the other side.<br/>
      Serve with honey, yogurt, or fresh fruits<br/>
  </p>
      </div>
      </div>
    </div>
  );} 
  if (x==="breakfast2"){return(
    <div>
      <button className={style.b} onClick={()=>y(null)}>Back</button>
      <div className={style.all}>
      <img src="https://www.walderwellness.com/wp-content/uploads/2023/05/Cottage-Cheese-With-Fruit-Walder-Wellness-3-1-680x1020.jpg" alt="meal2"/>
      <div className={style.t} >
      <h1>Cottage Cheese With Fruits</h1>
      <h2>Ingredients:</h2>
      <p>1 cup cottage cheese.<br/>
      1/2 cup strawberries, sliced.<br/>
      1/2 cup pineapple or mango, diced.<br/>
      1/2 cup blueberries or blackberries.<br/>
      1 tbsp honey or maple syrup.<br/>
      1 tbsp crushed nuts (walnuts or almonds).<br/>
      1 tsp chia or flax seeds (optional).<br/>
      </p>
      <h2>Recipe:</h2>
      <p>1:Place the cottage cheese in a serving bowl.<br/>
        2:Add strawberries, mango, and blueberries on top.<br/>
        3:Drizzle with honey or maple syrup.<br/>
        4:Sprinkle with nuts and seeds.<br/>
        5:Serve cold as a quick breakfast or snack.<br/>
     </p>
      </div>
      </div>
    </div>
  );} 
  if (x==="breakfast3"){return(
    <div>
      <button className={style.b} onClick={()=>y(null)}>Back</button>
      <div className={style.all}>
      <img src="https://www.eatingbirdfood.com/wp-content/uploads/2023/12/chia-pudding-hero.jpg" alt="meal3"/>
      <div className={style.t} >
      <h1>Chia Pudding</h1>
      <h2>Ingredients:</h2>
      <p>3 tbsp chia seeds.<br/>
      1 cup milk (regular or plant-based).<br/>
      1 tsp honey or maple syrup.<br/>
      1/2 tsp vanilla extract.<br/>
      Fruits for topping (banana, berries, strawberries).<br/>
      Granola or nut<br/></p>
      <h2>Recipe:</h2>
      <p>1:In a jar or bowl, mix chia seeds with milk, honey, and vanilla.<br/>
        2:Stir well and let it sit for 5 minutes.<br/>
        3:Stir again to prevent clumps.<br/>
        4:Refrigerate for at least 4 hours or overnight.<br/>
        5:Top with fruits and granola before serving.<br/></p>
      </div>
      </div>
    </div>
  );}
   if (x==="breakfast4"){return(
    <div>
      <button className={style.b} onClick={()=>y(null)}>Back</button>
      <div className={style.all}>
      <img src="https://asimplepalate.com/wp-content/uploads/2020/07/peanut-butter-oatmeal-bowl-1.jpg" alt="meal4"/>
      <div className={style.t} >
      <h1>Oatmeal Bowl</h1>
      <h2>Ingredients:</h2>
      <p>1/2 cup oats.<br/>
      1 cup milk or water.<br/>
      1/2 banana, mashed.<br/>
      1 tbsp peanut butter.<br/>
      A pinch of cinnamon.<br/>
      Fruits for topping: strawberries, blueberries, banana slices.<br/>
      Honey or maple syrup (optional)<br/></p>
      <h2>Recipe:</h2>
      <p>1:In a small pot, bring milk or water to a boil.<br/>
        2:Add oats and cook for 5–7 minutes on low heat.<br/>
        3:Stir in mashed banana and cinnamon.<br/>
        4:Pour into a bowl.<br/>
        5:Top with peanut butter, fruits, and honey if desired<br/></p>
      </div>
     </div>
    </div>
  );} 
  if (x==="breakfast5"){return(
    <div>
      <button className={style.b} onClick={()=>y(null)}>Back</button>
      <div className={style.all}>
      <img src="https://www.jessicagavin.com/wp-content/uploads/2020/07/avocado-toast-20.jpg" alt="meal5"/>
      <div className={style.t}>
      <h1>Avocado Toast</h1>
      <h2>Ingredients:</h2>
      <p>1 slice whole grain bread.<br/>
      1/2 avocado, mashed.<br/>
      Salt and pepper to taste.<br/>
      A squeeze of lemon juice.<br/>
      1 boiled or fried egg (optional).<br/>
      Tomato or cucumber slices for garnish.<br/></p>
      <h2>Recipe:</h2>
      <p>1:Toast the bread slice.<br/>
      Mash avocado with lemon juice, salt, and pepper.<br/>
      Spread it over the toast.<br/>
      Add an egg on top if you like.<br/>
      Garnish with tomato or cucumber slices.<br/></p>
      </div>
      </div>
    </div>
  );} 
  if (x==="breakfast6"){return(
    <div>
      <button className={style.b} onClick={()=>y(null)}>Back</button>
      <div className={style.all}>
      <img src="https://thecleaneatingcouple.com/wp-content/uploads/2022/05/egg-muffin-cups-1-683x1024.jpg"alt="meal6"/>
      <div className={style.t} >
      <h1>Egg Muffins</h1>
      <h2>Ingredients:</h2>
      <p>4 eggs.<br/>
      1/2 cup chopped spinach.<br/>
      1/4 cup diced bell peppers.<br/>
      1/4 cup shredded cheese.<br/>
      Salt and pepper to taste.<br/>
      A pinch of dried herbs.<br/></p>
      <h2>Recipe:</h2>
      <p>1:Preheat oven to 180°C (350°F).<br/>
      2:In a bowl, whisk eggs with salt and pepper.<br/>
      3:Add spinach, peppers, and herbs.<br/>
      4:Pour mixture into greased muffin tins.<br/>
      5:Sprinkle cheese on top.<br/>
      6:Bake for 20 minutes until fluffy and golden.<br/></p>
      </div>
      </div>
    </div>
  );} 
  if (x==="breakfast7"){return(
    <div>
      <button className={style.b} onClick={()=>y(null)}>Back</button>
      <div className={style.all}>
      <img src="https://heavenlyhomecooking.com/wp-content/uploads/2021/04/Vegetable-Omelette-Recipe-Finished-1.jpg"alt="meal7"/>
      <div className={style.t} >
      <h1>Vegetable Omelette</h1>
      <h2>Ingredients:</h2>
      <p>2 eggs.<br/>
      1/4 cup chopped onion.<br/>
      1/4 cup chopped bell peppers.<br/>
      1/4 cup sliced mushrooms.<br/>
      1 tbsp olive oil.<br/>
      Salt, pepper, and chili flakes (optional).<br/></p>
      <h2>Recipe:</h2>
      <p>1:Heat olive oil in a pan and sauté onions, peppers, and mushrooms.<br/>
        2:Whisk eggs with salt and pepper.<br/>
        3:Pour eggs over the vegetables.<br/>
        4:Cook on low heat until set, then fold in half.<br/>
        5:Serve hot with bread or salad.<br/></p>
      </div>
      </div>
    </div>
  );} 
  if (x==="breakfast8"){return( <div>
     <button className={style.b} onClick={()=>y(null)}>Back</button>
    <div className={style.all}>
      <img src="https://i.pinimg.com/736x/d2/e4/cd/d2e4cdef1db52bc7a542fe5dc526719f.jpg"alt="meal8"/>
      <div className={style.t} >
      <h1>Fruit Salad</h1>
      <h2>Ingredients:</h2>
      <p>1 cup chopped apples.<br/>
      1 cup chopped bananas.<br/>
      1 cup strawberries, sliced.<br/>
      1/2 cup grapes.<br/>
      1/2 cup mango or oranges.<br/>
      1 tbsp honey or lemon juice.<br/></p>
      <h2>Recipe:</h2>
      <p>1:In a large bowl, mix all the fruits together.<br/>
        2:Drizzle with honey or lemon juice.<br/>
        3:Toss gently.<br/>
        4:Serve chilled.<br/></p>
      </div>
      </div>
    </div>
  );} 
if (x==="lunch1"){return(
  <div>
  <button className={style.b} onClick={()=>y(null)}>Back</button>
  <div className={style.all}>
  <img src="https://somuchfoodblog.com/wp-content/uploads/2022/07/chicken-green-salad4.jpg" alt="meal9"/>
  <div className={style.t} >
  <h1>Grilled Chicken Salad</h1>
  <h2>Ingredients:</h2>
  <p>2 grilled chicken breasts (sliced).<br/>
    2 cups mixed greens (lettuce, spinach, arugula).<br/>
    1 cucumber (sliced).<br/>
    1/2 cup cherry tomatoes (halved).<br/>
    1/4 cup red onion (thinly sliced).<br/>
    2 tbsp olive oil.<br/>
    1 tbsp balsamic vinegar.<br/>
    Salt & pepper.<br/></p>
  <h2>Recipe:</h2>
  <p>1:Grill the chicken breasts and slice them into strips.<br/>
    2:In a large bowl, combine greens, cucumber, tomatoes, and onion.<br/>
    3:Top with grilled chicken slices.<br/>
    4:Drizzle olive oil, balsamic vinegar, salt, and pepper.<br/>
    5:Toss gently and serve fresh.<br/></p>
  </div>
  </div>
  </div>
);} 

if (x==="lunch2"){return(
<div>
<button className={style.b} onClick={()=>y(null)}>Back</button>
<div className={style.all}>
<img src="https://www.butterbeready.com/wp-content/uploads/2023/04/Tuna-Salad-FINAL-7-680x1020.jpg" alt="meal10"/>
<div className={style.t} >
<h1>Tuna Salad</h1>
<h2>Ingredients:</h2>
<p>1 can tuna (drained).<br/>
  2 tbsp mayonnaise or Greek yogurt.<br/>
  1/2 cucumber (chopped).<br/>
  1/4 cup corn.<br/>
  1 boiled egg (chopped, optional).<br/>
  1 tbsp lemon juice.<br/>
  Salt & pepper.<br/></p>
<h2>Recipe:</h2>
<p>1:Place tuna in a mixing bowl.<br/>
  2:Add cucumber, corn, and egg.<br/>
  3:Stir in mayonnaise or yogurt with lemon juice.<br/>
  4:Season with salt and pepper.<br/>
  5:Mix well and chill before serving.<br/></p>
</div>
</div>
</div>
);} 

if (x==="lunch3"){return(
<div>
<button className={style.b} onClick={()=>y(null)}>Back</button>
<div className={style.all}>
<img src="https://i0.wp.com/wanderingchickpea.com/wp-content/uploads/2021/05/2370FBA9-03B1-4F87-862D-98A621C4049F.jpeg?resize=800%2C1157&ssl=1" alt="meal11"/>
<div className={style.t} >
<h1>Brown Rice With Salmon</h1>
<h2>Ingredients:</h2>
<p>1 salmon fillet
  1 cup cooked brown rice.<br/>
  1/2 cup steamed broccoli.<br/>
  1/2 cup carrots (sliced).<br/>
  1 tbsp olive oil.<br/>
  1 tbsp soy sauce.<br/>
  1/2 lemon.<br/>
  </p>
<h2>Recipe:</h2>
<p>
  1:Season salmon with olive oil, soy sauce, and lemon juice.<br/>
  2:Bake or grill salmon for 12–15 minutes.<br/>
  3:Serve salmon over a bowl of brown rice.<br/>
  4:Add broccoli and carrots on the side.<br/>
  5:Drizzle extra soy sauce if desired.<br/></p>
</div>
</div>
</div>
);} 

if (x==="lunch4"){return(
<div>
<button className={style.b} onClick={()=>y(null)}>Back</button>
<div className={style.all}>
<img src="https://meghanitup.com/wp-content/uploads/2022/06/IMG_2340-768x1024.jpg" alt="meal12"/>
<div className={style.t} >
<h1>Turkey Wrap</h1>
<h2>Ingredients:</h2>
<p>1 whole wheat tortilla wrap.<br/>
  3 slices turkey breast.<br/>
  1/2 cup lettuce.<br/>
  2 slices tomato.<br/>
  1 slice cheese.<br/>
  1 tbsp mustard or light mayo.<br/></p>
<h2>Recipe:</h2>
<p>1:Lay tortilla flat and spread mustard or mayo.<br/>
  2:Add turkey slices, lettuce, tomato, and cheese.<br/>
  3:Roll tightly into a wrap.<br/>
  4:Slice in half and serve.<br/></p>
</div>
</div>
</div>
);} 

if (x==="lunch5"){return(
<div>
<button className={style.b} onClick={()=>y(null)}>Back</button>
<div className={style.all}>
<img src="https://thechowdownblog.com/wp-content/uploads/2024/02/grilled-vegetable-panini.jpg" alt="meal13"/>
<div className={style.t} >
<h1>Grilled Veggie Sandwich</h1>
<h2>Ingredients:</h2>
<p>2 slices whole grain bread.<br/>
  1 zucchini (grilled slices).<br/>
  1 bell pepper (grilled slices).<br/>
  1 eggplant (grilled slices).<br/>
  1 tbsp hummus or pesto.<br/>
  1 slice mozzarella cheese.<br/></p>
<h2>Recipe:</h2>
<p>Recipe:
  1:Grill zucchini, bell pepper, and eggplant until tender.<br/>
  2:Spread hummus or pesto on bread slices.<br/>
  3:Layer grilled veggies and mozzarella.<br/>
  4:Toast sandwich lightly until cheese melts.<br/>
  5:Serve warm.<br/></p>
</div>
</div>
</div>
);} 

if (x==="lunch6"){return(
<div>
<button className={style.b} onClick={()=>y(null)}>Back</button>
<div className={style.all}>
<img src="https://playswellwithbutter.com/wp-content/uploads/2021/03/Hummus-Bowls-15-960x1440.jpg" alt="meal14"/>
<div className={style.t} >
<h1>Chicken And Hummus Bowl</h1>
<h2>Ingredients:</h2>
<p>1 grilled chicken breast (sliced).<br/>
  1/2 cup hummus.<br/>
 1/2 cup quinoa or brown rice.<br/>
 1/2 cup cucumber (chopped).<br/>
 1/4 cup cherry tomatoes.<br/>
 1 tbsp olive oil.<br/>
 Pinch of paprika.<br/></p>
<h2>Recipe:</h2>
<p>1:Place quinoa or rice in a bowl.<br/>
  2:Add a dollop of hummus on the side.<br/>
  3:Top with grilled chicken slices, cucumber, and tomatoes.<br/>
  4:Drizzle olive oil and sprinkle paprika.<br/>
  5:Serve as a healthy protein-packed bowl.<br/></p>
</div>
</div>
</div>
);} 

if (x==="lunch7"){return(
<div>
    <button className={style.b} onClick={()=>y(null)}>Back</button>
<div className={style.all}>
<img src="https://healthyrecipesblogs.com/wp-content/uploads/2024/12/shrimp-stir-fry-2-2024.jpg" alt="meal15"/>
<div className={style.t} >
  <h1>Shrimp Stir-Fry</h1>
<h2>Ingredients:</h2>
<p>200g shrimp (peeled).<br/>
1 cup mixed vegetables (carrots, broccoli, bell pepper).<br/>
2 tbsp soy sauce.<br/>
1 tbsp sesame oil.<br/>
1 garlic clove (minced).<br/>
1 tsp ginger (grated).<br/></p>
<h2>Recipe:</h2>
<p>1:Heat sesame oil in a wok or pan.<br/>
  2:Add garlic and ginger, stir for 30 seconds.<br/>
  3:Add shrimp and cook until pink.<br/>
  4:Add vegetables and soy sauce, stir-fry for 5 minutes.<br/>
  5:Serve hot with rice or noodles.<br/></p>
</div>
</div>
</div>
);} 

if (x==="lunch8"){return(
<div>
<button className={style.b} onClick={()=>y(null)}>Back</button>
<div className={style.all}>
<img src="https://www.maebells.com/wp-content/uploads/2024/06/Grilled-Chicken-Caesar-Salad-14.jpg" alt="meal16"/>
<div className={style.t} >
<h1>Chicken Caesar Salad</h1>
<h2>Ingredients:</h2>
<p>1 grilled chicken breast (sliced).<br/>
  2 cups romaine lettuce.<br/>
  1/4 cup parmesan cheese.<br/>
  1/2 cup croutons.<br/>
  2 tbsp Caesar dressing.<br/></p>
<h2>Recipe:</h2>
<p>1:Chop romaine lettuce and place in a large bowl.<br/>
  2:Add grilled chicken slices on top.<br/>
  3:Sprinkle parmesan and croutons.<br/>
  4:Drizzle Caesar dressing.<br/>
  5:Toss lightly and serve.<br/></p>
</div>
</div>
</div>
);} 
if (x==="dinner1"){return(
  <div>
    <button className={style.b} onClick={()=>y(null)}>Back</button>
    <div className={style.all}>
    <img src="https://cookingwithclaudy.com/wp-content/uploads/2025/07/Baked-fish-in-foil.jpg" alt="dinner1"/>
    <div className={style.t}>
    <h1>Grilled Fish With Steamed Veggies</h1>
    <h2>Ingredients:</h2>
    <p>2 fillets of white fish (tilapia, cod, or seabass).<br/>
      1 tbsp olive oil.<br/>
      1 tbsp lemon juice.<br/>
      1 tsp garlic powder.<br/>
      Salt and black pepper to taste.<br/>
      1 cup broccoli florets.<br/>
      1 cup sliced carrots.<br/>
      ½ cup green beans.<br/></p>
    <h2>Recipe:</h2>
    <p>1:Season the fish with olive oil, lemon juice, garlic powder, salt, and pepper.<br/>
      2:Heat a grill pan and cook the fish for 4–5 minutes on each side until golden and flaky.<br/>
      3:Place broccoli, carrots, and green beans in a steamer basket and steam for 7–8 minutes.<br/>
      4:Arrange the grilled fish on a plate with the steamed vegetables.<br/>
      5:Drizzle with extra lemon juice before serving.<br/></p>
    </div>
    </div>
  </div>
);}
if (x==="dinner2"){return(
  <div>
    <button className={style.b} onClick={()=>y(null)}>Back</button>
    <div className={style.all}>
    <img src="https://theblondcook.com/wp-content/uploads/2023/01/easy-crock-pot-vegetable-soup-2-1.jpg" alt="dinner2"/>
    <div className={style.t}>
    <h1>Vegetable Soup</h1>
    <h2>Ingredients:</h2>
    <p>1 tbsp olive oil.<br/>
      1 onion, chopped.<br/>
      2 garlic cloves, minced.<br/>
      2 carrots, diced.<br/>
      2 celery sticks, chopped.<br/>
      1 zucchini, diced.<br/>
      1 potato, diced.<br/>
      1 cup chopped cabbage.<br/>
      1 can diced tomatoes.<br/>
      4 cups vegetable broth.<br/>
      1 tsp dried thyme.<br/>
      Salt and pepper.<br/></p>
    <h2>Recipe:</h2>
    <p>1:Heat olive oil in a pot and sauté onion and garlic until soft.<br/>
      2:Add carrots, celery, zucchini, and potato and cook for 5 minutes.<br/>
      3:Stir in tomatoes, cabbage, broth, thyme, salt, and pepper.<br/>
      4:Bring the soup to a boil, then reduce heat and simmer for 20–25 minutes.<br/>
      5:Serve hot with bread on the side.<br/></p>
    </div>
    </div>
  </div>
);}
if (x==="dinner3"){return(
  <div>
  <button className={style.b} onClick={()=>y(null)}>Back</button>
  <div className={style.all}>
    <img src="https://www.servingdumplings.com/wp-content/uploads/2021/02/garlic-butter-sauteed-shrimp-3-6780332d.jpg" alt="dinner3"/>
    <div className={style.t}>
    <h1>Shrimp And Garlic Sauté</h1>
    <h2>Ingredients:</h2>
    <p>250g shrimp, peeled and deveined.<br/>
      2 tbsp olive oil.<br/>
      4 garlic cloves, sliced.<br/>
      1 tbsp lemon juice.<br/>
      1 tbsp parsley, chopped.<br/>
      Salt and pepper.<br/></p>
    <h2>Recipe:</h2>
    <p>1:Heat olive oil in a skillet and sauté garlic until golden.<br/>
      2:Add shrimp, season with salt and pepper, and cook for 2–3 minutes per side.<br/>
      3:Pour in lemon juice and toss with chopped parsley.<br/>
      4:Remove from heat and serve immediately.<br/></p>
    </div>
    </div>
  </div>
);}
if (x==="dinner4"){return(
  <div>
    <button className={style.b} onClick={()=>y(null)}>Back</button>
    <div className={style.all}>
    <img src="https://www.oliveandmango.com/images/uploads/2022_05_23_greek_tuna_salad_2.jpg" alt="dinner4"/>
    <div className={style.t}>
    <h1>Greek Salad With Tuna</h1>
    <h2>Ingredients:</h2>
    <p>1 cucumber, diced.<br/>
      2 tomatoes, chopped.<br/>
      ½ red onion, sliced.<br/>
      ½ cup black olives.<br/>
      ½ cup feta cheese, cubed.<br/>
      1 can tuna, drained.<br/>
      2 tbsp olive oil.<br/>
      1 tbsp lemon juice.<br/>
      1 tsp dried oregano.<br/>
      Salt and pepper.<br/></p>
    <h2>Recipe:</h2>
    <p>1:Combine cucumber, tomatoes, onion, olives, feta, and tuna in a bowl.<br/>
      2:In a small cup, mix olive oil, lemon juice, oregano, salt, and pepper.<br/>
      3:Pour the dressing over the salad and toss well.<br/>
      4:Serve chilled or at room temperature.<br/></p>
    </div>
    </div>
  </div>
);}
if (x==="dinner5"){return(
  <div>
    <button className={style.b} onClick={()=>y(null)}>Back</button>
    <div className={style.all}>
    <img src="https://vancouverwithlove.com/wp-content/uploads/2023/03/cropped-vegan-chickpea-spinach-curry.jpg" alt="dinner5"/>
    <div className={style.t}>
    <h1>Chickpea And Spinach Curry</h1>
    <h2>Ingredients:</h2>
    <p>1 tbsp olive oil.<br/>
      1 onion, chopped.<br/>
      2 garlic cloves, minced.<br/>
      1 tsp ginger, grated.<br/>
      1 can chickpeas, drained.<br/>
      2 cups fresh spinach.<br/>
      1 can coconut milk.<br/>
      2 tbsp curry powder.<br/>
      1 tsp cumin.<br/>
      Salt.<br/></p>
    <h2>Recipe:</h2>
    <p>1:Heat olive oil in a pot and sauté onion, garlic, and ginger.<br/>
      2:Add curry powder and cumin, stir for 1 minute to release flavors.<br/>
      3:Stir in chickpeas and coconut milk, simmer for 10 minutes.<br/>
      4:Add spinach and cook until wilted.<br/>
      5:Serve hot with rice or flatbread.<br/></p>
    </div>
    </div>
  </div>
);}
if (x==="dinner6"){return(
  <div>
    <button className={style.b} onClick={()=>y(null)}>Back</button>
    <div className={style.all}>
    <img src="https://www.paleorunningmomma.com/wp-content/uploads/2022/08/avocado-egg-salad-600x900.jpg" alt="dinner6"/>
    <div className={style.t}>
    <h1>Egg Salad With Avocado</h1>
    <h2>Ingredients:</h2>
    <p>4 boiled eggs, chopped.<br/>
      1 ripe avocado, mashed.<br/>
      2 tbsp Greek yogurt.<br/>
      1 tsp lemon juice.<br/>
      1 tsp mustard.<br/>
      Salt and pepper.<br/>
      Fresh parsley.<br/></p>
    <h2>Recipe:</h2>
    <p>1:Mash avocado in a bowl until smooth.<br/>
      2:Mix in Greek yogurt, lemon juice, mustard, salt, and pepper.<br/>
      3:Fold in chopped boiled eggs.<br/>
      4:Garnish with parsley.<br/>
      5:Serve on toast or lettuce wraps.<br/></p>
    </div>
    </div>
  </div>
);}
if (x==="dinner7"){return(
  <div>
  <button className={style.b} onClick={()=>y(null)}>Back</button>
  <div className={style.all}>
   <img src="https://homecookedroots.com/wp-content/uploads/2024/11/Sweet-Potato-Burrito-Bowl-6.jpg" alt="dinner7"/>
    <div className={style.t}>
    <h1>Sweet Potato And Black Bean Bowl</h1>
    <h2>Ingredients:</h2>
    <p>1 sweet potato, cubed.<br/>
      1 tbsp olive oil.<br/>
      1 can black beans, rinsed.<br/>
      ½ cup corn.<br/>
      1 avocado, sliced.<br/>
      1 tsp paprika.<br/>
      1 tsp cumin.<br/>
      Salt and pepper</p>
    <h2>Recipe:</h2>
    <p>1:Toss sweet potato cubes with olive oil, paprika, cumin, salt, and pepper.<br/>
      2:Roast in the oven at 200°C (400°F) for 20–25 minutes.<br/>
      3:In a bowl, combine roasted sweet potatoes, black beans, corn, and avocado.<br/>
      4:Drizzle with lime juice or dressing of choice.<br/>
      5:Serve warm.<br/></p>
    </div>
    </div>
  </div>
);}
if (x==="dinner8"){return(
  <div>
    <button className={style.b} onClick={()=>y(null)}>Back</button>
    <div className={style.all}>
      <img src="https://upbeetkitchen.com/wp-content/uploads/2022/08/raspberry-Greek-yogurt-smoothie-bowl-recipe-up-beet-kitchen-9.jpg" alt="dinner8"/>
      <div className={style.t}>
      <h1>Yogurt Bowl</h1>
      <h2>Ingredients:</h2>
      <p>1 cup Greek yogurt.<br/>
        ½ cup granola.<br/>
        ½ cup mixed fruits.<br/>
        1 tbsp honey.<br/>
        1 tbsp chia seeds.<br/></p>
      <h2>Recipe:</h2>
      <p>1:Scoop yogurt into a bowl.<br/>
        2:Add granola and fresh fruits on top.<br/>
        3:Drizzle with honey.<br/>
        4:Sprinkle chia seeds.<br/>
        5:Enjoy chilled.<br/></p>
      </div>
      </div>
      </div>
);}


  return (
    <div className={style.body1}>
      <div className={style.title}>
            <nav className={style.navbar}>
              <div className={style.navbarlogo}>
                <Link to="/" id={style.logo}>
                   WELLSY
                </Link>
              </div>
              <ul className={style.navbarlinks}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/mood">Mood</Link>
                </li>
                <li>
                  <Link to="/meals">Meals</Link>       
                </li>  
              </ul>
            </nav>
      <h1> WELLSY MEALS</h1>
      </div>
      <div className={style.head}>
      <h2>BREAKFAST</h2>
      </div>
      <div className={style.hi}>
     <div className={style.g}>
<div className={style.help}>
<p className={style.num}>1</p>
      <img src="https://www.inspiredtaste.net/wp-content/uploads/2016/07/Whole-Wheat-Pancakes-Recipe-1-1200.jpg" alt="meal1"onClick={()=>y("breakfast1")} className={style.s}/>
      </div>
      <p className={style.name}>Whole Grain Pancakes</p>
      </div>
      <div className={style.g}>
<div className={style.help}>
<p className={style.num}>2</p>
      <img src="https://www.walderwellness.com/wp-content/uploads/2023/05/Cottage-Cheese-With-Fruit-Walder-Wellness-3-1-680x1020.jpg" alt="meal2"onClick={()=>y("breakfast2")} className={style.s}/>
      </div>
      <p className={style.name}>Cottage Cheese With Fruits</p>
      </div>
      <div className={style.g}>
<div className={style.help}>
<p className={style.num}>3</p>
      <img src="https://www.eatingbirdfood.com/wp-content/uploads/2023/12/chia-pudding-hero.jpg" alt="meal3"onClick={()=>y("breakfast3")} className={style.s}/>
      </div>
      <p className={style.name}>Chia Pudding</p>
      </div>
      <div className={style.g}>
<div className={style.help}>
<p className={style.num}>4</p>
      <img src="https://asimplepalate.com/wp-content/uploads/2020/07/peanut-butter-oatmeal-bowl-1.jpg"alt="meal4"onClick={()=>y("breakfast4")} className={style.s}/> 
      </div>
      <p className={style.name}>Oatmeal Bowl</p>
      </div>
      <div className={style.g}>
<div className={style.help}>
<p className={style.num}>5</p>
      <img src="https://www.jessicagavin.com/wp-content/uploads/2020/07/avocado-toast-20.jpg"alt="meal5"onClick={()=>y("breakfast5")} className={style.s}/>
      </div>
      <p className={style.name}>Avocado Toast</p>
      </div>
     <div className={style.g}>
<div className={style.help}>
<p className={style.num}>6</p>
      <img src="https://thecleaneatingcouple.com/wp-content/uploads/2022/05/egg-muffin-cups-1-683x1024.jpg"alt="meal6"onClick={()=>y("breakfast6")} className={style.s}/>
      </div>
      <p className={style.name}>Egg Muffins</p>
      </div>
      <div className={style.g}>
<div className={style.help}>
<p className={style.num}>7</p>
      <img src="https://heavenlyhomecooking.com/wp-content/uploads/2021/04/Vegetable-Omelette-Recipe-Finished-1.jpg"alt="meal7"onClick={()=>y("breakfast7")} className={style.s}/>
      </div>
      <p className={style.name}>Vegetable Omelette</p>
      </div>
     <div className={style.g}>
<div className={style.help}>
<p className={style.num}>8</p>
      <img src="https://i.pinimg.com/736x/d2/e4/cd/d2e4cdef1db52bc7a542fe5dc526719f.jpg"alt="meal8" onClick={()=>y("breakfast8")} className={style.s}/>
      </div>
      <p className={style.name}>Fruit Salad</p>
      </div>
      </div>
      <div className={style.head}>
      <h2>LUNCH</h2>
      </div>
    <div className={style.hi}>
    <div className={style.g}>
<div className={style.help}>
<p className={style.num}>1</p>
      <img src="https://somuchfoodblog.com/wp-content/uploads/2022/07/chicken-green-salad4.jpg" alt="meal9" onClick={()=>y("lunch1")} className={style.s}/>
    </div>
    <p className={style.name}>Grilled Chicken Salad</p>
   </div>
   <div className={style.g}>
<div className={style.help}>
<p className={style.num}>2</p>
      <img src="https://www.butterbeready.com/wp-content/uploads/2023/04/Tuna-Salad-FINAL-7-680x1020.jpg" alt="meal10" onClick={()=>y("lunch2")} className={style.s}/>
     </div>
    <p className={style.name}>Tuna Salad</p>
    </div>
   <div className={style.g}>
<div className={style.help}>
<p className={style.num}>3</p>
      <img src="https://i0.wp.com/wanderingchickpea.com/wp-content/uploads/2021/05/2370FBA9-03B1-4F87-862D-98A621C4049F.jpeg?resize=800%2C1157&ssl=1" alt="meal11" onClick={()=>y("lunch3")} className={style.s}/>
     </div>
    <p className={style.name}>Brown Rice With Salmon</p>
    </div>
    <div className={style.g}>
<div className={style.help}>
<p className={style.num}>4</p>
      <img src="https://meghanitup.com/wp-content/uploads/2022/06/IMG_2340-768x1024.jpg" alt="meal12" onClick={()=>y("lunch4")} className={style.s}/>
     </div>
    <p className={style.name}>Turkey Wrap</p>
    </div>
    <div className={style.g}>
<div className={style.help}>
<p className={style.num}>5</p>
      <img src="https://thechowdownblog.com/wp-content/uploads/2024/02/grilled-vegetable-panini.jpg" alt="meal13" onClick={()=>y("lunch5")} className={style.s}/>
     </div>
    <p className={style.name}>Grilled Veggie Sandwich</p>
    </div>
    <div className={style.g}>
<div className={style.help}>
<p className={style.num}>6</p>
      <img src="https://playswellwithbutter.com/wp-content/uploads/2021/03/Hummus-Bowls-15-960x1440.jpg" alt="meal14" onClick={()=>y("lunch6")} className={style.s}/>
    </div>
    <p className={style.name}>Chicken And Hummus Bowl</p>
    </div>
    <div className={style.g}>
<div className={style.help}>
<p className={style.num}>7</p>
      <img src="https://healthyrecipesblogs.com/wp-content/uploads/2024/12/shrimp-stir-fry-2-2024.jpg" alt="meal15" onClick={()=>y("lunch7")} className={style.s}/>
    </div>
    <p className={style.name}>Shrimp Stir-Fry</p>
  </div>
  <div className={style.g}>
<div className={style.help}>
<p className={style.num}>8</p>
      <img src="https://www.maebells.com/wp-content/uploads/2024/06/Grilled-Chicken-Caesar-Salad-14.jpg" alt="meal16" onClick={()=>y("lunch8")} className={style.s}/>
    </div>
    <p className={style.name}>Chicken Caesar Salad</p>
  </div>

</div>
<div className={style.head}>
    <h2>DINNER</h2>
    </div>
<div className={style.hi}>
<div className={style.g}>
<div className={style.help}>
<p className={style.num}>1</p>
<img src="https://cookingwithclaudy.com/wp-content/uploads/2025/07/Baked-fish-in-foil.jpg" alt="dinner1" onClick={()=>y("dinner1")} className={style.s}/>
  </div>
  <p className={style.name}>Grilled Fish With Steamed Veggies</p>
  </div>

 <div className={style.g}>
<div className={style.help}>
<p className={style.num}>2</p>
    <img src="https://theblondcook.com/wp-content/uploads/2023/01/easy-crock-pot-vegetable-soup-2-1.jpg" alt="dinner2" onClick={()=>y("dinner2")} className={style.s}/>
    </div>
    <p className={style.name}>Vegetable Soup</p>
  </div>

  <div className={style.g}>
<div className={style.help}>
<p className={style.num}>3</p>
  <img src="https://www.servingdumplings.com/wp-content/uploads/2021/02/garlic-butter-sauteed-shrimp-3-6780332d.jpg" alt="dinner3" onClick={()=>y("dinner3")} className={style.s}/>
  </div>
  <p className={style.name}>Shrimp And Garlic Sauté</p>
  </div>

<div className={style.g}>
<div className={style.help}>
<p className={style.num}>4</p>
<img src="https://www.oliveandmango.com/images/uploads/2022_05_23_greek_tuna_salad_2.jpg" alt="dinner4" onClick={()=>y("dinner4")} className={style.s}/>
</div>
<p className={style.name}>Greek Salad With Tuna</p>
  </div>

<div className={style.g}>
<div className={style.help}>
<p className={style.num}>5</p>
<img src="https://vancouverwithlove.com/wp-content/uploads/2023/03/cropped-vegan-chickpea-spinach-curry.jpg" alt="dinner5" onClick={()=>y("dinner5")} className={style.s}/>
</div>
<p className={style.name}>Chickpea And Spinach Curry</p>
  </div>

<div className={style.g}>
<div className={style.help}>
<p className={style.num}>6</p>
<img src="https://www.paleorunningmomma.com/wp-content/uploads/2022/08/avocado-egg-salad-600x900.jpg" alt="dinner6" onClick={()=>y("dinner6")} className={style.s}/>
</div>
<p className={style.name}>Egg Salad With Avocado</p>
  </div>

<div className={style.g}>
<div className={style.help}>
<p className={style.num}>7</p>
<img src="https://homecookedroots.com/wp-content/uploads/2024/11/Sweet-Potato-Burrito-Bowl-6.jpg" alt="dinner7" onClick={()=>y("dinner7")} className={style.s}/>
</div>
<p className={style.name}>Sweet Potato And Black Bean Bowl</p>
  </div>

  <div className={style.g}>
<div className={style.help}>
<p className={style.num}>8</p>
<img src="https://upbeetkitchen.com/wp-content/uploads/2022/08/raspberry-Greek-yogurt-smoothie-bowl-recipe-up-beet-kitchen-9.jpg" alt="dinner8" onClick={()=>y("dinner8")} className={style.s}/>
</div>
<p className={style.name}>Yogurt Bowl</p>
  </div>
</div>
     <Chatbot/>
</div>

  );
}




export default Meals;
