---
title: "Doing a game jam is such a pleasant thing, since its a joy, and this is long post title, and to view how it works. Game art and Code preview here."
date: "2020-21-09"
draft: false
path: "/blog/EkaPostaus"
---
# This blog post is just some art showcase and movement script

Get some inspiration maybe
---

`Unity` `Animated Gif` `Script`

```javascript
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class playerMovement : MonoBehaviour
{

    public float moveSpeed = 5f;
    public Rigidbody2D rb;
    public Animator animator;
    Vector2 movement;



    // Update is called once per frame
    void Update()
    {
        movement.x = Input.GetAxisRaw("Horizontal");
        movement.y = Input.GetAxisRaw("Vertical");

        animator.SetFloat("Horizontal", movement.x);
        animator.SetFloat("Vertical", movement.y);
        animator.SetFloat("Speed", movement.sqrMagnitude);
    }

void FixedUpdate(){
        rb.MovePosition(rb.position + movement * moveSpeed * Time.fixedDeltaTime);
    }

}
```

---

| Game Name | Release Date | asdf|
|-------|------ |------|
| Just a Knight   | Never   | asdf |

---

![KnightGif](https://github.com/Jkytol/JKgatsby/blob/master/src/images/Knight.gif?raw=true)

---
