
const realWorldResults = {
    'Close top drawer': {
        text: 'closing top drawer',
        input: {   
            rgb: 'static/img/goal_image/rt1/0_in.jpg',
            depth: 'static/img/goal_image/rt1/0_in_depth.jpg'
        }, 
        predicted: {
            rgb: 'static/img/goal_image/rt1/0_pred.jpg', 
            depth: 'static/img/goal_image/rt1/0_pred_depth.jpg'
        }
    },
    'Place the apple fruit in the sink': {
        text: 'placing the apple fruit in the sink',
        input: {
            rgb: 'static/img/goal_image/jacoplay/1_in.jpg', 
            depth: 'static/img/goal_image/jacoplay/1_in_depth.jpg'
        },
        predicted: {
            rgb: 'static/img/goal_image/jacoplay/1_pred.jpg', 
            depth: 'static/img/goal_image/jacoplay/1_pred_depth.jpg'
        }
    },
    'Pick coke can from middle shelf of fridge': {
        text: 'picking coke can from middle shelf of fridge',
        input: {
            rgb: 'static/img/goal_image/rt1/5_in.jpg',
            depth: 'static/img/goal_image/rt1/5_in_depth.jpg'
        },
        predicted: {
            rgb: 'static/img/goal_image/rt1/5_pred.jpg',
            depth: 'static/img/goal_image/rt1/5_pred_depth.jpg'
        }
    },
    'Pick up the long bread': {
        text: 'picking up the long bread',
        input: {
            rgb: 'static/img/goal_image/jacoplay/10_in.jpg',
            depth: 'static/img/goal_image/jacoplay/10_in_depth.jpg'
        },
        predicted: {
            rgb: 'static/img/goal_image/jacoplay/10_pred.jpg',
            depth: 'static/img/goal_image/jacoplay/10_pred_depth.jpg'
        }
    },
    'Move apple near rxbar chocolate': {
        text: 'moving apple near rxbar chocolate',
        input: {
            rgb: 'static/img/goal_image/rt1/3_in.jpg',
            depth: 'static/img/goal_image/rt1/3_in_depth.jpg'
        },
        predicted: {
            rgb: 'static/img/goal_image/rt1/3_pred.jpg',
            depth: 'static/img/goal_image/rt1/3_pred_depth.jpg'
        }
    },
    'Place the burger meat in the white plate': {
        text: 'placing the burger meat in the white plate',
        input: {
            rgb: 'static/img/goal_image/jacoplay/5_in.jpg',
            depth: 'static/img/goal_image/jacoplay/5_in_depth.jpg'
        },
        predicted: {
            rgb: 'static/img/goal_image/jacoplay/5_pred.jpg',
            depth: 'static/img/goal_image/jacoplay/5_pred_depth.jpg'
        }
    },
    'Move orange can near redbull can': {
        text: 'moving orange can near redbull can',
        input: {
            rgb: 'static/img/goal_image/rt1/5_in.jpg',
            depth: 'static/img/goal_image/rt1/5_in_depth.jpg'
        },
        predicted: {
            rgb: 'static/img/goal_image/rt1/5_pred.jpg',
            depth: 'static/img/goal_image/rt1/5_pred_depth.jpg'
        }
    },
    'Pick up the orange fruit': {
        text: 'picking up the orange fruit',
        input: {
            rgb: 'static/img/goal_image/jacoplay/0_in.jpg',
            depth: 'static/img/goal_image/jacoplay/0_in_depth.jpg'
        },
        predicted: {
            rgb: 'static/img/goal_image/jacoplay/0_pred.jpg',
            depth: 'static/img/goal_image/jacoplay/0_pred_depth.jpg'
        }
    },
    'Pick orange': {
        text: 'picking orange',
        input: {
            rgb: 'static/img/goal_image/rt1/6_in.jpg',
            depth: 'static/img/goal_image/rt1/6_in_depth.jpg'
        },
        predicted: {
            rgb: 'static/img/goal_image/rt1/6_pred.jpg',
            depth: 'static/img/goal_image/rt1/6_pred_depth.jpg'
        }
    },
    'Place apple into middle drawer': {
        text: 'placing apple into middle drawer',
        input: {
            rgb: 'static/img/goal_image/rt1/1_in.jpg',
            depth: 'static/img/goal_image/rt1/1_in_depth.jpg'
        },
        predicted: {
            rgb: 'static/img/goal_image/rt1/1_pred.jpg',
            depth: 'static/img/goal_image/rt1/1_pred_depth.jpg'
        }
    }
}

const rlbenchResults = {
    'Grasp the purple block to the target': {
        text: 'grasping the purple block to the target',
        input: {
            rgb: 'static/img/goal_image/rlb_vis/8_in.jpg',
            depth: 'static/img/goal_image/rlb_vis/8_in_depth.jpg',
            // pcd: 'static/img/goal_image/rlb_vis/8_pc_in.jpg'
            pcd: 'static/video/rlbench_goal/pick_input.mp4'
        },
        predicted: {
            rgb: 'static/img/goal_image/rlb_vis/8_pred.jpg',
            depth: 'static/img/goal_image/rlb_vis/8_pred_depth.jpg',
            // pcd: 'static/img/goal_image/rlb_vis/8_pc_out.jpg'
            pcd: 'static/video/rlbench_goal/pick_pred.mp4'
        }
    },
    'Push down the orange button': {
        text: 'pushing down the orange button',
        input: {
            rgb: 'static/img/goal_image/rlb_vis/122_in.jpg',
            depth: 'static/img/goal_image/rlb_vis/122_in_depth.jpg',
            // pcd: 'static/img/goal_image/rlb_vis/122_pc_in.jpg'
            pcd: 'static/video/rlbench_goal/button_input.mp4'
        },
        predicted: {
            rgb: 'static/img/goal_image/rlb_vis/122_pred.jpg',
            depth: 'static/img/goal_image/rlb_vis/122_pred_depth.jpg',
            // pcd: 'static/img/goal_image/rlb_vis/122_pc_out.jpg'
            pcd: 'static/video/rlbench_goal/button_pred.mp4'
        }
    },
    'Place the stack of bank notes on the top shelf of the safe': {
        text: 'placing the stack of bank notes on the top shelf of the safe',
        input: {
            rgb: 'static/img/goal_image/rlb_vis/258_in.jpg',
            depth: 'static/img/goal_image/rlb_vis/258_in_depth.jpg',
            // pcd: 'static/img/goal_image/rlb_vis/258_pc_in.jpg'
            pcd: 'static/video/rlbench_goal/money_safe_input.mp4'
        },
        predicted: {
            rgb: 'static/img/goal_image/rlb_vis/258_pred.jpg',
            depth: 'static/img/goal_image/rlb_vis/258_pred_depth.jpg',
            // pcd: 'static/img/goal_image/rlb_vis/258_pc_out.jpg'
            pcd: 'static/video/rlbench_goal/money_safe_pred.mp4'
        }
    },
    'Pick up the red cup': {
        text: 'picking up the red cup',
        input: {
            rgb: 'static/img/goal_image/rlb_vis/283_in.jpg',
            depth: 'static/img/goal_image/rlb_vis/283_in_depth.jpg',
            // pcd: 'static/img/goal_image/rlb_vis/283_pc_in.jpg'
            pcd: 'static/video/rlbench_goal/cup_input.mp4'
        },
        predicted: {
            rgb: 'static/img/goal_image/rlb_vis/283_pred.jpg',
            depth: 'static/img/goal_image/rlb_vis/283_pred_depth.jpg',
            // pcd: 'static/img/goal_image/rlb_vis/283_pc_out.jpg'
            pcd: 'static/video/rlbench_goal/cup_pred.mp4'
        }
    },
    'Push the block until it is sitting on top of the target': {
        text: 'pushing the block until it is sitting on top of the target',
        input: {
            rgb: 'static/img/goal_image/rlb_vis/381_in.jpg',
            depth: 'static/img/goal_image/rlb_vis/381_in_depth.jpg',
            // pcd: 'static/img/goal_image/rlb_vis/381_pc_in.jpg'
            pcd: 'static/video/rlbench_goal/block_input.mp4'
        },
        predicted: {
            rgb: 'static/img/goal_image/rlb_vis/381_pred.jpg',
            depth: 'static/img/goal_image/rlb_vis/381_pred_depth.jpg',
            // pcd: 'static/img/goal_image/rlb_vis/381_pc_out.jpg'
            pcd: 'static/video/rlbench_goal/block_pred.mp4'
        }
    },
    'Touch the silver ball with the panda gripper': {
        text: 'touching the silver ball with the panda gripper',
        input: {
            rgb: 'static/img/goal_image/rlb_vis/516_in.jpg',
            depth: 'static/img/goal_image/rlb_vis/516_in_depth.jpg',
            // pcd: 'static/img/goal_image/rlb_vis/516_pc_in.jpg'
            pcd: 'static/video/rlbench_goal/reach_input.mp4'
        },
        predicted: {
            rgb: 'static/img/goal_image/rlb_vis/516_pred.jpg',
            depth: 'static/img/goal_image/rlb_vis/516_pred_depth.jpg',
            // pcd: 'static/img/goal_image/rlb_vis/516_pc_out.jpg'
            pcd: 'static/video/rlbench_goal/reach_pred.mp4'
        }
    },
    'Grasping the umbrella by its handle, lift it up and out of the stand': {
        text: 'grasping the umbrella by its handle, lifting it up and out of the stand',
        input: {
            rgb: 'static/img/goal_image/rlb_vis/952_in.jpg',
            depth: 'static/img/goal_image/rlb_vis/952_in_depth.jpg',
            // pcd: 'static/img/goal_image/rlb_vis/952_pc_in.jpg'
            pcd: 'static/video/rlbench_goal/umbre_input.mp4'
        },
        predicted: {
            rgb: 'static/img/goal_image/rlb_vis/952_pred.jpg',
            depth: 'static/img/goal_image/rlb_vis/952_pred_depth.jpg',
            // pcd: 'static/img/goal_image/rlb_vis/952_pc_out.jpg'
            pcd: 'static/video/rlbench_goal/umbr_pred.mp4'
        }
    },
    'Take the stack of money out of the third shelf and place it on the table': {
        text: 'taking the stack of money out of the third shelf and placing it on the table',
        input: {
            rgb: 'static/img/goal_image/rlb_vis/1001_in.jpg',
            depth: 'static/img/goal_image/rlb_vis/1001_in_depth.jpg',
            // pcd: 'static/img/goal_image/rlb_vis/1001_pc_in.jpg'
            pcd: 'static/video/rlbench_goal/money_out_input.mp4'
        },
        predicted: {
            rgb: 'static/img/goal_image/rlb_vis/1001_pred.jpg',
            depth: 'static/img/goal_image/rlb_vis/1001_pred_depth.jpg',
            // pcd: 'static/img/goal_image/rlb_vis/1001_pc_out.jpg'
            pcd: 'static/video/rlbench_goal/money_out_pred.mp4'
        }
    }
}

function bulidRealWorldResultSection() {
    // elements
    const selecter = $('#real-world-select');
    const slider = $('#real-world-scene-slider');
    
    // evnet handler
    const showRealWorldResult = function() {
        var result = realWorldResults[selecter.val()];
        $('#real-world-input-rgb').attr('src', result['input']['rgb']);
        $('#real-world-input-depth').attr('src', result['input']['depth']);
        $('#real-world-predicted-rgb').attr('src', result['predicted']['rgb']);
        $('#real-world-predicted-depth').attr('src', result['predicted']['depth']);
    }

    // insert options & bind selecter event
    $.each(realWorldResults, function(key, value) {
        selecter.append(
            $('<option>', { value: key, text: value['text'] })
        );
    });
    showRealWorldResult();
    selecter.change(showRealWorldResult);
    
    // insert slider items & bind slider event
    $.each(realWorldResults, function(key, value) {
        var image = $(
            '<img>', { src: value['input']['rgb'], style: 'height: 100px; width: auto; border-radius: 7%;'}
        ).click(function() {
            selecter.val(key);
            showRealWorldResult();
        });
        slider.append(
            $('<div>', { class: 'item' }).append(image)
        );
    });
    // build slider
    bulmaCarousel.attach('#real-world-scene-slider', {
        slidesToShow: 5,
        pagination: false,
        loop: true,
        autoplay: true,
        autoplaySpeed: 8000,
    });
}

function bulidRlbenchResultSection() {
    // elements
    const selecter = $('#rlbench-select');
    const slider = $('#rlbench-scene-slider');
    
    // evnet handler
    const showRlbenchResult = function() {
        var result = rlbenchResults[selecter.val()];
        $('#rlbench-input-rgb').attr('src', result['input']['rgb']);
        $('#rlbench-input-depth').attr('src', result['input']['depth']);
        $('#rlbench-predicted-rgb').attr('src', result['predicted']['rgb']);
        $('#rlbench-predicted-depth').attr('src', result['predicted']['depth']);
        
        // $('#rlbench-input-pcd').attr('src', result['input']['pcd']);
        // $('#rlbench-predicted-pcd').attr('src', result['predicted']['pcd']);
        $('#rlbench-input-pcd source').attr('src', result['input']['pcd']);
        $('#rlbench-input-pcd')[0].load();
        $('#rlbench-predicted-pcd source').attr('src', result['predicted']['pcd']);
        $('#rlbench-predicted-pcd')[0].load();
    }

    // insert options & bind selecter event
    $.each(rlbenchResults, function(key, value) {
        selecter.append(
            $('<option>', { value: key, text: value['text'] })
        );
    });
    showRlbenchResult();
    selecter.change(showRlbenchResult);
    
    // insert slider items & bind slider event
    $.each(rlbenchResults, function(key, value) {
        var image = $(
            '<img>', { src: value['input']['rgb'], style: 'height: 100px; width: auto; border-radius: 7%;'}
        ).click(function() {
            selecter.val(key);
            showRlbenchResult();
        });
        slider.append(
            $('<div>', { class: 'item' }).append(image)
        );
    });
    // build slider
    bulmaCarousel.attach('#rlbench-scene-slider', {
        slidesToShow: 5,
        pagination: false,
        loop: true,
        autoplay: true,
        autoplaySpeed: 8000,
    });
}

function buildRlbenchManipulationSection() {
    bulmaCarousel.attach('#rlbench-manipulation-slider', {
        slidesToShow: 1,
        pagination: false,
        loop: true,
        autoplay: true,
        autoplaySpeed: 8000,
    }); 
}

$('document').ready(function() {
    bulidRealWorldResultSection();
    bulidRlbenchResultSection();
    buildRlbenchManipulationSection();
    hljs.highlightAll();
});

