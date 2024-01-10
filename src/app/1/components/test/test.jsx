import React from 'react'

export default function test() {
  return (
    <section class="showcase test">
    <div class="box showscoreendgame">
        <div class="textscore">
            <span class="score scoreType"></span>
        </div>
        <div class="textscore">
            <p class="score">
                <?= $al['test']['time'] ?? $l['error'] ?>:
            </p>
            <span class="score scoreTime"></span>
        </div>
        <div class="textscore">
            <p class="score">
                <?= $al['test']['numberAnswers'] ?? $l['error'] ?>:
            </p>
            <span class="score scoreLevel"></span>
        </div>
        <div class="textscore">
            <p class="score">
                <?= $al['test']['correct'] ?? $l['error'] ?>:
            </p>
            <span class="score scoreCorrect"></span>
        </div>
        <div class="textscore">
            <p class="score">
                <?= $al['test']['incorrect'] ?? $l['error'] ?>:
            </p>
            <span class="score scoreIncorrect"></span>
        </div>
        <div class="textscore">
            <p class="score">
                <?= $al['test']['allcharacter'] ?? $l['error'] ?>:
            </p>
            <span class="score scoreAllcharacter"></span>
        </div>
        <div class="textscore">
            <span class="score correctPercentage"></span>
        </div>
        <div class="divbtn">
            <button class="btn setting">
                <?= $l['menu']['Setting'] ?? $l['error'] ?>
            </button>
            <button class="btn starttests">
                <?= $l['general']['start'] ?? $l['error'] ?>
            </button>
        </div>
    </div>

    <div class="box setting active">
        <div class="formsetting">
            <div class="informsetting">
                <label for="mode">
                    <?= $al['test']['mode']['text'] ?? $l['error'] ?>
                </label>
                <div class="inputsetting mode" id="<?= $settingapp['mode'] ?>">
                    <button class="btn japan-my" value="japan-my">
                        <?= ($al['test']['mode']['japan-my'] ?? $l['error']) . ($l['listLang']['list ' . $settingapp['lang']] ?? $l['error']) ?>
                    </button>
                    <button class="btn my-japan" value="my-japan">
                        <?= ($l['listLang']['list ' . $settingapp['lang']] ?? $l['error']) . ($al['test']['mode']['my-japan'] ?? $l['error']) ?>
                    </button>
                    <button class="btn sound" value="sound">
                        <?= $al['test']['mode']['sound'] ?? $l['error'] ?>
                    </button>
                </div>
            </div>
            <div class="informsetting">
                <label for="time">
                    <?= $al['test']['time'] ?? $l['error'] ?>
                </label>
                <span class="rangeValue time"><?= $settingapp['time'] ?></span>
                <input type="range" name="time" value="<?= $settingapp['time'] ?>" min="1" max="10" id="time" step="1" class="range inputsetting time">
            </div>
            <div class="informsetting">
                <label for="level">
                    <?= $al['test']['numberAnswers'] ?? $l['error'] ?>
                </label>
                <span class="rangeValue level"><?= $settingapp['level'] ?></span>
                <input type="range" name="level" value="<?= $settingapp['level'] ?>" min="2" max="9" id="level" step="1" class="range inputsetting level">
            </div>

            <br>

            <div class="informsetting">
                <label for="type">
                    <?= $al['test']['type'] ?? $l['error'] ?>
                </label>
                <label for="type" class="labeltype <?php if ($settingapp['type'] == 1) { ?>checked<?php } ?>">
                    <span class="hiragana"><?= $al['character']['hiragana']['text'] ?? $l['error'] ?></span>
                    <span> / </span>
                    <span class="katakana"><?= $al['character']['katakana']['text'] ?? $l['error'] ?></span>
                </label>
                <input type="checkbox" name="type" id="type" class="checkbox inputsetting type" <?php if ($settingapp['type'] == 1) { ?>checked<?php } ?>>
            </div>
            <div class="informsetting">
                <label for="unvoiced">
                    <?= $al['character']['unvoiced']['text'] ?? $l['error'] ?>
                </label>
                <label for="unvoiced">46</label>
                <input type="checkbox" name="unvoiced" id="unvoiced" class="checkbox inputsetting unvoiced" <?php if ($settingapp['unvoiced'] == 1) { ?>checked<?php } ?>>
            </div>
            <div class="informsetting">
                <label for="voiced">
                    <?= $al['character']['voiced']['text'] ?? $l['error'] ?>
                </label>
                <label for="voiced">25</label>
                <input type="checkbox" name="voiced" id="voiced" class="checkbox inputsetting voiced" <?php if ($settingapp['voiced'] == 1) { ?>checked<?php } ?>>
            </div>
            <div class="informsetting">
                <label for="bendsound">
                    <?= $al['character']['bendsound']['text'] ?? $l['error'] ?>
                </label>
                <label for="bendsound">36</label>
                <input type="checkbox" name="bendsound" id="bendsound" class="checkbox inputsetting bendsound" <?php if ($settingapp['bendsound'] == 1) { ?>checked<?php } ?>>
            </div>

            <br>

            <div class="informsetting">
                <span class="allcharacter"><?= $al['test']['allcharacter'] ?? $l['error'] ?></span>
                <span class="valueallcharacter"></span>
            </div>

            <button class="btn starttest" type="submit" name="submit">
                <?= $l['general']['start'] ?? $l['error'] ?>
            </button>
        </div>
    </div>

    <div class="box gameplay">
        <div class="timebar">
            <div class="timeline"></div>
        </div>
        <div class="textscore">
            <p class="score">
                <?= $al['test']['correct'] ?? $l['error'] ?>:
            </p>
            <span class="score scoreCorrect"></span>
        </div>
        <div class="textscore">
            <p class="score">
                <?= $al['test']['incorrect'] ?? $l['error'] ?>:
            </p>
            <span class="score scoreIncorrect"></span>
        </div>
        <span class="showtext"></span>
        <div class="boxreply">
        </div>
    </div>
</section>
  )
}
