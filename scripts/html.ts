# HTML Transformations go here

$("/html") {
  add_assets()

  rewrite_links()
  absolutize_srcs()

  
  @import sections/header.ts
  @import sections/footer.ts

  @import mappings.ts
	$("./body/h2") {
		inner("Custom Moovweb Emoticons")
	}

	$("./body/p[2]") {
		inner("These are custom emoticons for Moovweb's HipChat account.  You can add/edit them <a href='https://hipchat.com/admin/emoticons'>here</a>.")
	}

  $("./body/div[2]") {
    $("./a") {
      remove()
    }
    @import extras.ts
  }

	$("./body/footer") {
		insert_bottom("br")
		insert_bottom("br")
	}

	$("./body") {
		insert_bottom("div", class: "moovweb_footer", "Site Powered by <a href='http://moovweb.com'><b>Moovweb</b></a>")
	}
}

