# HTML Transformations go here

$("/html") {
  add_assets()

  rewrite_links()
  absolutize_srcs()

  
  @import sections/header.ts
  @import sections/footer.ts

  @import mappings.ts
  $("./body/div[2]") {
    $("./a") {
      remove()
    }
    #@import extras.ts
  }
}

