function SearchBar() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <button type="submit">Go</button>
        <div class="row">
            <div class="col">
                <ul>
                    <li><input type="checkbox" name="Śniadanie" id="1" /> Śniadanie</li>
                    <li><input type="checkbox" name="Obiad" id="1" /> Obiad</li>
                    <li><input type="checkbox" name="Kolacja" id="1" /> Kolacja</li>
                </ul>
            </div>
            <div class="col">
                 <ul>
                    <li><input type="checkbox" name="Śniadanie" id="2" /> Szybkie</li>
                    <li><input type="checkbox" name="Obiad" id="2" /> Średnie</li>
                    <li><input type="checkbox" name="Kolacja" id="2" /> Długie</li>
                </ul>
            </div>
            <div class="col">
                 <ul>
                    <li><input type="checkbox" name="Śniadanie" id="3" /> Wege</li>
                    <li><input type="checkbox" name="Obiad" id="3" /> Mięsne</li>
                    <li><input type="checkbox" name="Kolacja" id="3" /> Zupa</li>
                </ul>
            </div>
        </div>
        <ul>
            
        </ul>
      </form>
    );
  }

  export default SearchBar;